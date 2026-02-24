import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconFilter({ size = 20, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-full text-inherit">
        <path
          d="M4 4h16v2.5l-6 6v8l-4-2v-6l-6-6V4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
