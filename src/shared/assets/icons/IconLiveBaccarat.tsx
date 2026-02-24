import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconLiveBaccarat({ size = 20, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
        <circle cx="6" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8.5 8h-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
