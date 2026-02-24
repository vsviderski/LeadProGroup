import { cn } from '@shared/lib';
import type { IconProps } from '@shared/types/icon';

/** Иконка «Главная» (дом) для сайдбара. Цвет наследуется (активность: синий, неактивность: серый). */
export function IconHome({ size = 16, className }: IconProps) {
  return (
    <span
      role="img"
      aria-hidden
      className={cn('inline-flex shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
        <path
          d="M16 5.1865V14.7845C16 15.4525 15.46 16.0005 14.8 16.0005H10.108V10.6225H5.892V16.0005H1.2C0.54 16.0005 0 15.4545 0 14.7845V5.1865C0 4.7525 0.228 4.3525 0.598 4.1345L7.398 0.1455C7.728 -0.0485 8.27 -0.0485 8.6 0.1455L15.4 4.1345C15.73 4.3285 16 4.8025 16 5.1865Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
