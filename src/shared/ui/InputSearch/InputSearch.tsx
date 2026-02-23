import { type InputHTMLAttributes, useId } from 'react';
import { cn } from '@shared/lib';

export interface InputSearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
  inputClassName?: string;
}

export function InputSearch({
  label,
  placeholder = 'Поиск по порталу',
  className,
  inputClassName,
  ...props
}: InputSearchProps) {
  const id = useId();
  return (
    <div className={cn('relative flex items-center', className)}>
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        aria-label={label ?? placeholder}
        className={cn(
          'w-full rounded-[10px] border border-white/10 bg-[rgba(32,19,121,0.1)] px-3 py-3 pr-10 text-sm text-[#CAD4EE] placeholder:text-[#CAD4EE]/70',
          inputClassName
        )}
        {...props}
      />
      <span
        className="absolute right-3 size-[15px] opacity-80"
        aria-hidden
      >
        {/* Иконка поиска — можно заменить на SVG/компонент Icon */}
        <svg
          viewBox="0 0 15 15"
          fill="none"
          className="size-full text-white"
        >
          <path
            d="M14 14L10.5 10.5M6.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}
