import { ReactNode, type ButtonHTMLAttributes } from 'react';
import { cn } from '@shared/lib';

const AUTH_GRADIENT = 'linear-gradient(87.02deg, #007AFF 0%, #2BD9FF 100%)';
const AUTH_LEFT_R = 8;
const AUTH_NOTCH = 10;

const AUTH_FRAME_BORDER = 2;
const AUTH_FRAME_R = 18;
const AUTH_FRAME_CUT = 4;
const authFrameOuterClip = `polygon(0 ${AUTH_FRAME_R}px, ${AUTH_FRAME_R}px 0, calc(100% - ${AUTH_FRAME_CUT}px) 0, 100% ${AUTH_FRAME_CUT}px, 100% calc(100% - ${AUTH_FRAME_R}px), calc(100% - ${AUTH_FRAME_R}px) 100%, ${AUTH_FRAME_CUT}px 100%, 0 calc(100% - ${AUTH_FRAME_CUT}px))`;
const authFrameInnerClip = `polygon(0 ${AUTH_FRAME_R - AUTH_FRAME_BORDER}px, ${AUTH_FRAME_R - AUTH_FRAME_BORDER}px 0, calc(100% - ${AUTH_FRAME_CUT - AUTH_FRAME_BORDER}px) 0, 100% ${AUTH_FRAME_CUT - AUTH_FRAME_BORDER}px, 100% calc(100% - ${AUTH_FRAME_R - AUTH_FRAME_BORDER}px), calc(100% - ${AUTH_FRAME_R - AUTH_FRAME_BORDER}px) 100%, ${AUTH_FRAME_CUT - AUTH_FRAME_BORDER}px 100%, 0 calc(100% - ${AUTH_FRAME_CUT - AUTH_FRAME_BORDER}px))`;

export type ButtonVariant = 'filled' | 'outline' | 'secondary' | 'primary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'filled', children, className, ...props }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <div
        className={cn('flex h-[46px] shrink-0 overflow-hidden', className)}
        style={{
          padding: AUTH_FRAME_BORDER,
          background: AUTH_GRADIENT,
          clipPath: authFrameOuterClip,
        }}
      >
        <div
          className="flex h-full w-full overflow-hidden"
          style={{
            background: '#0c0c18',
            clipPath: authFrameInnerClip,
          }}
        >
          <button
            type="button"
            className={cn(
              'flex h-full w-full min-w-[113px] items-center justify-center',
              'text-sm font-normal text-white hover:bg-white/5',
              'border border-transparent'
            )}
            style={{
              clipPath: `polygon(0 ${AUTH_LEFT_R}px, ${AUTH_LEFT_R}px 0, calc(100% - ${AUTH_NOTCH}px) 0, 100% ${AUTH_NOTCH}px, 100% calc(100% - ${AUTH_NOTCH}px), calc(100% - ${AUTH_NOTCH}px) 100%, ${AUTH_LEFT_R}px 100%, 0 calc(100% - ${AUTH_LEFT_R}px))`,
            }}
            {...props}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'primary') {
    return (
      <div className={cn('flex h-[46px] shrink-0', className)}>
        <button
          type="button"
          className={cn(
            'flex h-full w-full min-w-[158px] flex-1 items-center justify-center',
            'text-sm font-extrabold text-white',
            'border border-transparent hover:opacity-90'
          )}
          style={{
            background: AUTH_GRADIENT,
            clipPath: authFrameOuterClip,
          }}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        'rounded-md px-4 py-3 text-sm font-medium',
        variant === 'filled' && 'bg-gradient-to-br from-[#007AFF] to-[#2BDBFF] text-white hover:opacity-90',
        variant === 'outline' && 'border border-[#007AFF]/50 bg-transparent text-white hover:bg-[#007AFF]/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
