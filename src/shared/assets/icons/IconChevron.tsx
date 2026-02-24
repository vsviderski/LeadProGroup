import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconChevron({ size = 16, className }: IconProps) {
  const height = (7 / 16) * (typeof size === 'number' ? size : 16);

  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height }}
    >
      <svg viewBox="0 0 16 7" fill="none" className="size-full text-inherit">
        <path
          d="M6.10378 6.10378L0 0L6.31048 4.97693C7.16498 5.65085 8.37014 5.65085 9.22464 4.97693L15.5351 0L9.43134 6.10378C8.51246 7.02266 7.02266 7.02266 6.10378 6.10378Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
