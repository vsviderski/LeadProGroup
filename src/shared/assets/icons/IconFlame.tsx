import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

export function IconFlame({ size = 16, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 9 13" fill="none" className="size-full text-inherit">
        <path
          d="M4.44406 12.7407C3.55349 12.7406 2.68348 12.4731 1.94683 11.9725C1.21017 11.4721 0.640867 10.7619 0.312715 9.93396C-0.0154356 9.10604 -0.0872947 8.19862 0.106456 7.32938C0.300206 6.46013 0.75063 5.66915 1.39933 5.05896C2.19459 4.31052 4.14777 2.96296 3.85147 0C7.40702 2.37037 9.18478 4.74074 5.62926 8.29629C6.22184 8.29629 7.11073 8.29629 8.59222 6.8326C8.75222 7.29067 8.88851 7.78311 8.88851 8.29629C8.88851 9.47502 8.42026 10.6055 7.58677 11.439C6.75326 12.2725 5.6228 12.7407 4.44406 12.7407Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
