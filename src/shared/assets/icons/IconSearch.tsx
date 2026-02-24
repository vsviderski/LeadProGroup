import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconSearch({ size = 20, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 15 15" fill="none" className="size-full text-inherit">
        <path
          d="M14 14L10.5 10.5M6.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
