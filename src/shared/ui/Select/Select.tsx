import { useState, useRef, useEffect, useId } from 'react';
import { Icon } from '../Icon/Icon';
import { IconChevron } from '@shared/assets/icons';
import { cn } from '@shared/lib';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Select({ label, options, value, onValueChange, className }: SelectProps) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValue = value ?? options[0]?.value;
  const selectedOption = options.find((o) => o.value === selectedValue);
  const effectiveHighlight =
    highlightedIndex >= 0 && highlightedIndex < options.length ? highlightedIndex : 0;

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((o) => o.value === selectedValue);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen, selectedValue, options]);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const select = (opt: SelectOption) => {
    onValueChange?.(opt.value);
    close();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();

      if (isOpen) {
        select(options[effectiveHighlight]);
      } else {
        open();
      }
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) open();
      else setHighlightedIndex((i) => (i + 1) % options.length);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) open();
      else setHighlightedIndex((i) => (i - 1 + options.length) % options.length);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative flex flex-col', label && 'pt-3', className)}
    >
      {label && (
        <label
          id={`${id}-label`}
          className={cn(
            'absolute left-3.5 top-3 -translate-y-1/2 w-fit text-[10px] font-medium leading-none text-white/60',
            "before:absolute before:left-0 before:right-0 before:top-1/2 before:h-[3px] before:-translate-y-1/2 before:bg-[#161426] before:content-['']"
          )}
        >
          <span className="relative z-10">{label}</span>
        </label>
      )}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-activedescendant={isOpen ? `${id}-option-${effectiveHighlight}` : undefined}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          'group flex h-10 w-full min-w-[140px] cursor-pointer items-center justify-between gap-2 rounded-xl',
          'border border-white/10 bg-[#161426] px-3.5 text-left',
          'transition-[border-color,box-shadow,background-color] duration-200 ease-out',
          'hover:border-white/20 hover:bg-[#1c1a32]',
          'focus:border-[#7FB8FF]/60 focus:bg-[#1c1a32] focus:shadow-[0_0_0_3px_rgba(127,184,255,0.15)] focus:outline-none'
        )}
      >
        <span className="min-w-0 truncate text-sm font-light text-white">{selectedOption?.label ?? ''}</span>
        <span
          className={cn(
            'flex shrink-0 text-white/70 transition-transform duration-200',
            'group-hover:text-white/90 group-focus:text-[#7FB8FF]',
            isOpen && 'rotate-180'
          )}
          aria-hidden
        >
          <Icon Svg={IconChevron} width={16} height={16} />
        </span>
      </button>

      <div
        className={cn(
          'absolute top-full left-0 z-50 mt-1 min-w-full overflow-hidden rounded-xl',
          'border border-white/10 bg-[#161426] shadow-[0_12px_40px_rgba(0,0,0,0.5)]',
          'transition-[opacity,transform] duration-200 ease-out',
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        )}
        role="listbox"
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-activedescendant={isOpen ? `${id}-option-${effectiveHighlight}` : undefined}
        tabIndex={-1}
      >
        <ul className="max-h-[240px] overflow-y-auto py-1">
          {options.map((opt, index) => (
            <li
              key={opt.value}
              role="option"
              id={`${id}-option-${index}`}
              aria-selected={opt.value === selectedValue}
            >
              <button
                type="button"
                onClick={() => select(opt)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={cn(
                  'w-full cursor-pointer px-3.5 py-2.5 text-left text-sm font-light text-white transition-colors',
                  index === effectiveHighlight ? 'bg-[#24243A] text-[#7FB8FF]' : 'hover:bg-[#24243A]/60'
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
