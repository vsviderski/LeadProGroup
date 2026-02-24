import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@shared/lib';

export interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Tag({
  active = false,
  icon,
  children,
  className,
  ...props
}: TagProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors duration-200',
        active
          ? 'bg-[#24243A] text-[#7FB8FF]'
          : 'bg-transparent text-white hover:bg-[#24243A]/50',
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
