import type { ComponentType } from 'react';
import { cn } from '@shared/lib';

export interface IconProps {
  Svg: ComponentType<{ size?: number; className?: string; [key: string]: unknown }>;
  width?: number;
  height?: number;
  className?: string;
  'aria-label'?: string;
  [key: string]: unknown;
}

export function Icon({
  Svg,
  width = 20,
  height = 20,
  className,
  'aria-label': ariaLabel,
  ...rest
}: IconProps) {
  const size = width ?? height ?? 20;

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn('inline-flex shrink-0 items-center justify-center', className)}
      style={{ width, height }}
    >
      <Svg size={size} {...rest} />
    </span>
  );
}
