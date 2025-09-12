import { CoreMessage } from '@shared/types.ts';
import { SupabaseClient } from './supabaseClient.ts';
import { ContentBlockParam } from 'https://esm.sh/@anthropic-ai/sdk@0.53.0/resources/messages.d.mts';

/**
 * Reformats a Supabase signed URL to use the correct host (local ngrok or production)
 * This is needed because signed URLs use the internal Supabase URL, but we need the external host
 */
export function reformatSignedUrl(signedUrl: string): string {
  const supabaseHost =
    (Deno.env.get('ENVIRONMENT') === 'local'
      ? Deno.env.get('NGROK_URL')
      : Deno.env.get('SUPABASE_URL')
    )?.trim() ?? '';

  const url = new URL(signedUrl);
  return `${supabaseHost}${url.pathname}${url.search}`;
}

export async function getSignedUrl(
  supabaseClient: SupabaseClient,
  bucket: string,
  path: string,
): Promise<string | null> {
  const { data: rawImageUrl } = await supabaseClient.storage
    .from(bucket)
    .createSignedUrl(path, 60 * 60);

  if (!rawImageUrl?.signedUrl) {
    return null;
  }

  return reformatSignedUrl(rawImageUrl.signedUrl);
}

export async function getSignedUrls(
  supabaseClient: SupabaseClient,
  bucket: string,
  paths: string[],
): Promise<string[]> {
  const { data: signedUrls } = await supabaseClient.storage
    .from(bucket)
    .createSignedUrls(paths, 60 * 60);

  return signedUrls
    ? signedUrls
        .filter((image) => !image.error && image.signedUrl)
        .map((image) => reformatSignedUrl(image.signedUrl))
    : [];
}

// Format user message blocks (supports text, error context and signed image URLs)
export async function formatUserMessage(
  message: CoreMessage,
  supabaseClient: SupabaseClient,
  userId: string,
  conversationId: string,
): Promise<{
  role: 'user';
  content: ContentBlockParam[];
}> {
  const parts: ContentBlockParam[] = [];

  if (message.content.text) {
    parts.push({ type: 'text', text: message.content.text });
  }

  if (message.content.error) {
    parts.push({
      type: 'text',
      text: `The OpenSCAD code generated has failed to compile and has given the following error, fix any syntax, logic, parameter, library, or other issues: ${message.content.error}`,
    });
  }

  if (message.content.images?.length) {
    const imageFiles = message.content.images.map(
      (imageId) => `${userId}/${conversationId}/${imageId}`,
    );
    const imageInputs = await getSignedUrls(
      supabaseClient,
      'images',
      imageFiles,
    );

    if (imageInputs.length > 0) {
      parts.push({
        type: 'text',
        text: `Reference images (IDs: ${message.content.images.join(', ')}):`,
      });
      parts.push(
        ...imageInputs.map((image) => ({
          type: 'image' as const,
          source: { type: 'url' as const, url: image },
        })),
      );
    } else {
      parts.push({
        type: 'text',
        text: `User uploaded ${message.content.images.length} reference image(s) with IDs: ${message.content.images.join(', ')}`,
      });
    }
  }

  return { role: 'user', content: parts };
}