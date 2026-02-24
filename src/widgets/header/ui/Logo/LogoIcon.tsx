import { useId } from 'react';

export function LogoIcon({ className, size = 32 }: { className?: string; size?: number }) {
  const id = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="4.55 5.43 23 21.13"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="16" y1="5.43446" x2="16" y2="26.5655" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007AFF" />
          <stop offset="1" stopColor="#7C5BFF" />
        </linearGradient>
      </defs>
      <path
        d="M27.4516 26.5655H11.933C7.85457 26.5655 4.54837 23.2593 4.54836 19.1809L4.54832 5.43446H13.5014L13.5015 18.7576H27.4516V26.5655Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
