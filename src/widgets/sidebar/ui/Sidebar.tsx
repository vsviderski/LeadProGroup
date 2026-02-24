import { cn } from '@shared/lib';
import type { NavItem } from '../model/types';
import { NavList } from './NavList/NavList';

export interface SidebarProps {
  items: NavItem[];
  activeId: string | null;
  onNavSelect: (id: string) => void;
  className?: string;
}

export function Sidebar({ items, activeId, onNavSelect, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex min-h-0 w-full flex-1 flex-col border-r border-white/5 bg-[#08071d] px-3 py-3 lg:w-[220px] lg:shrink-0',
        className
      )}
      aria-label="Боковая панель"
    >
      <NavList items={items} activeId={activeId} onSelect={onNavSelect} />
    </aside>
  );
}
