import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconMenu({ size = 20, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-full text-inherit">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
