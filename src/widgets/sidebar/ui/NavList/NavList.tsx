import type { ComponentType } from 'react';
import { Icon } from '@shared/ui';
import {
  IconHome,
  IconCards,
  IconNew,
  IconBrands,
  IconProviders,
  IconBonus,
  IconApps,
  IconChevron,
} from '@shared/assets/icons';
import type { NavItem } from '../../model/types';
import { cn } from '@shared/lib';

const NAV_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  home: IconHome,
  cards: IconCards,
  new: IconNew,
  brands: IconBrands,
  providers: IconProviders,
  bonus: IconBonus,
  apps: IconApps,
};

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
        const IconComponent = item.iconName ? NAV_ICONS[item.iconName] : null;
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
            {IconComponent && (
              <Icon
                Svg={IconComponent}
                width={20}
                height={20}
                aria-label={item.label}
                className={!isActive ? 'text-[#FFFFFF1F]' : undefined}
              />
            )}
            <span className="flex-1">{item.label}</span>
            {item.hasArrow && (
              <Icon
                Svg={IconChevron}
                width={16}
                height={7}
                className={!isActive ? 'text-[#FFFFFF1F]' : undefined}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
