import { cn } from '@shared/lib';

export interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loader({ className, size = 'md' }: LoaderProps) {
  const sizeClasses = {
    sm: 'size-6 border-2',
    md: 'size-10 border-2',
    lg: 'size-14 border-3',
  };
  return (
    <div
      role="status"
      aria-label="Загрузка"
      className={cn(
        'animate-spin rounded-full border-white/20 border-t-white',
        sizeClasses[size],
        className
      )}
    />
  );
}
