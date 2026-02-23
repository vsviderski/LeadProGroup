import { Icon } from '@shared/ui';
import type { NavItem } from '../model/types';
import { cn } from '@shared/lib';

export interface NavListProps {
  items: NavItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

export function NavList({ items, activeId, onSelect, className }: NavListProps) {
  return (
    <nav className={cn('flex flex-col gap-1', className)} aria-label="Основное меню">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={cn(
              'flex w-full items-center gap-3 rounded-lg px-2 py-3.5 text-left text-sm transition-colors',
              isActive ? 'bg-[#161426] text-[#7FB8FF]' : 'bg-transparent text-[#CAD4EE] hover:bg-[#161426]/50'
            )}
          >
            {item.iconName && <Icon name={item.iconName as never} size={20} aria-label={item.label} />}
            <span className="flex-1">{item.label}</span>
            {item.hasArrow && <Icon name="arrow-down" size={16} className="rotate-[-90deg]" />}
          </button>
        );
      })}
    </nav>
  );
}
