import { type SelectHTMLAttributes, useId } from 'react';
import { cn } from '@shared/lib';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Select({
  label,
  options,
  value,
  onValueChange,
  className,
  ...props
}: SelectProps) {
  const id = useId();

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-0.5 text-[8px] font-light uppercase leading-none text-white/50"
        >
          {label}
        </label>
      )}
      <div className="relative flex h-9 w-full min-w-48 items-center rounded-lg border border-[rgba(150,167,185,0.2)] bg-[#161426] px-3">
        <select
          id={id}
          value={value ?? options[0]?.value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className="w-full appearance-none bg-transparent pr-6 text-xs font-light text-white outline-none"
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-2 size-4 text-white/80"
          aria-hidden
        >
          <svg viewBox="0 0 16 16" fill="none" className="size-full">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
