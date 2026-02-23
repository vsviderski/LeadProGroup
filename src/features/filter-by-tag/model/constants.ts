import type { TagItem } from './types';

export const DEFAULT_TAGS: TagItem[] = [
  { id: 'all', label: 'Все', iconName: 'grid-all' },
  { id: 'fast', label: 'Быстрые Игры', iconName: 'lightning' },
  { id: 'slots', label: 'Слоты', iconName: 'slots' },
  { id: 'casino', label: 'Казино', iconName: 'dice' },
  { id: 'live', label: 'Лайв Казино', iconName: 'live' },
  { id: 'popular', label: 'Популярные', iconName: 'flame' },
  { id: 'new', label: 'Новые', iconName: 'new' },
  { id: 'bonus', label: 'Покупка бонуса', iconName: 'gift' },
  { id: 'search', label: 'Найти игру', iconName: 'search' },
];

/** Id тегов, по которым фильтруют список (без "Все" и "Найти игру") */
export const FILTER_TAG_IDS = DEFAULT_TAGS.filter(
  (t) => t.id !== 'all' && t.id !== 'search'
).map((t) => t.id);
