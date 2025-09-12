import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ModelConfig } from '@/types/misc';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PARAMETRIC_MODELS: ModelConfig[] = [
  {
    id: 'fast',
    name: 'CadxStudio',
    description: 'Fast responses, optimized for iterative part design',
  },
  {
    id: 'quality',
    name: 'CadxStudio Pro',
    description: 'Enhanced capabilities takes longer to think',
  },
];
