import { cn } from '@shared/lib';

export type IconName =
  | 'menu'
  | 'close'
  | 'home'
  | 'home-outline'
  | 'search'
  | 'filter'
  | 'arrow-down'
  | 'cards'
  | 'new'
  | 'brands'
  | 'providers'
  | 'bonus'
  | 'apps'
  | 'live-baccarat'
  | 'grid-all'
  | 'lightning'
  | 'slots'
  | 'dice'
  | 'live'
  | 'flame'
  | 'gift';

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  'aria-label'?: string;
}

export function Icon({
  name,
  className,
  size = 20,
  'aria-label': ariaLabel,
}: IconProps) {
  const s = size;
  const label = ariaLabel ?? name;

  return (
    <span
      role="img"
      aria-label={label}
      className={cn('inline-flex shrink-0', className)}
      style={{ width: s, height: s }}
    >
      {name === 'menu' && (
        <svg viewBox="0 0 24 24" fill="none" className="size-full text-inherit">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {name === 'close' && (
        <svg viewBox="0 0 24 24" fill="none" className="size-full text-inherit">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === 'search' && (
        <svg viewBox="0 0 15 15" fill="none" className="size-full text-inherit">
          <path
            d="M14 14L10.5 10.5M6.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {name === 'arrow-down' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === 'filter' && (
        <svg viewBox="0 0 24 24" fill="none" className="size-full text-inherit">
          <path
            d="M4 4h16v2.5l-6 6v8l-4-2v-6l-6-6V4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {(name === 'home' || name === 'home-outline') && (
        <svg viewBox="0 0 20 20" fill="none" className="size-full text-inherit">
          <path
            d="M3 10l7-7 7 7v7h-4v-5H7v5H3v-7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={name === 'home' ? 'currentColor' : 'none'}
          />
        </svg>
      )}
      {name === 'cards' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <rect x="2" y="4" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="6" y="2" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
      {name === 'new' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === 'bonus' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M8 2v2M8 12v2M4 4l1.5 1.5M10.5 10.5L12 12M4 12l1.5-1.5M10.5 5.5L12 4M2 8h2M12 8h2M4 4l1.5-1.5M10.5 5.5L12 6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
      {name === 'apps' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <rect x="2" y="2" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="10" y="2" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="2" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="10" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
      {name === 'brands' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M3 6h10v6H3V6zM5 4v2M11 4v2M4 9h2M10 9h2"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {name === 'providers' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M2 8h4l2 4 2-4h4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === 'live-baccarat' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <circle cx="6" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8.5 8h-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )}
      {name === 'grid-all' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <rect x="2" y="2" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="9" y="2" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="2" y="9" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="9" y="9" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
      {name === 'lightning' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M9 2L4 9h3l-1 5 6-7H9l1-5z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === 'slots' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <rect x="2" y="3" width="3" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="6.5" y="3" width="3" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          <rect x="11" y="3" width="3" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
      {name === 'dice' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <rect x="3" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="6" cy="6" r="0.8" fill="currentColor" />
          <circle cx="10" cy="10" r="0.8" fill="currentColor" />
        </svg>
      )}
      {name === 'live' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 6v4l3-2-3-2z" fill="currentColor" />
        </svg>
      )}
      {name === 'flame' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path
            d="M8 2c.5 2-1.5 4 0 5s2-1 2 3c0 2.5-1.5 4-2 4s-2-1.5-2-4c0-2 1.5-3 0-5-.5-1 1-2 2-3z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
      {name === 'gift' && (
        <svg viewBox="0 0 16 16" fill="none" className="size-full text-inherit">
          <path d="M8 3v10M3 6h10v3H3V6zM4 6V5a2 2 0 014 0v1M8 5a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M3 9v4h10V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}
