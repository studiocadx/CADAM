import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AnimatedEllipsis } from '@/components/chat/AnimatedEllipsis';

export function AssistantLoading() {
  return (
    <div className="flex w-full p-1">
      <div className="mr-2 mt-1">
        <Avatar className="h-9 w-9 border border-cadxstudio-neutral-700 bg-cadxstudio-neutral-950 p-1.5">
          <AvatarImage
            src={`${import.meta.env.BASE_URL}/cadxstudio-logo.svg`}
            alt="CadxStudio"
          />
        </Avatar>
      </div>
      <div className="flex max-w-[80%] flex-col items-center justify-center gap-2 rounded-lg bg-cadxstudio-neutral-800 p-3">
        <AnimatedEllipsis color="cadxstudio-neutral" />
      </div>
    </div>
  );
}
