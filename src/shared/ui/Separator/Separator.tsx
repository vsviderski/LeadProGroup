import { cn } from '@shared/lib';

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical' | 'diagonal';
  className?: string;
}

export function Separator({ orientation = 'vertical', className }: SeparatorProps) {
  if (orientation === 'diagonal') {
    return (
      <span
        role="separator"
        aria-hidden
        className={cn('inline-flex shrink-0 items-center justify-center', className)}
      >
        <span className="h-4 w-px rotate-[24deg] bg-white/20" style={{ minWidth: 1 }} />
      </span>
    );
  }

  return (
    <hr
      role="separator"
      className={cn(
        'shrink-0 border-0 bg-gradient-to-b from-white/10 to-transparent',
        orientation === 'vertical' && 'h-5 w-px',
        orientation === 'horizontal' && 'h-px w-full',
        className
      )}
    />
  );
}
