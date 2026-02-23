import type { NavItem } from './types';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Главная', iconName: 'home', active: true },
  { id: 'games', label: 'Игры', iconName: 'cards', hasArrow: true },
  { id: 'updates', label: 'Обновления', iconName: 'new' },
  { id: 'brands', label: 'Бренды', iconName: 'brands' },
  { id: 'providers', label: 'Провайдеры', iconName: 'providers' },
  { id: 'bonuses', label: 'Бонусы', iconName: 'bonus' },
  { id: 'apps', label: 'Приложения', iconName: 'apps' },
];
