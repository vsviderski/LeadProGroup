import {
  IconGridAll,
  IconFastGames,
  IconProviders,
  IconLiveCasino,
  IconFlame,
  IconNewGames,
  IconBonusBuy,
  IconSearch,
} from '@shared/assets/icons';
import { Icon } from '@shared/ui';
import type { TagItem } from '../types/types';

const ICON_SIZE = 16;

export const DEFAULT_TAGS: TagItem[] = [
  { id: 'all', label: 'Все', icon: <IconGridAll /> },
  { id: 'fast', label: 'Быстрые Игры', icon: <IconFastGames /> },
  { id: 'slots', label: 'Слоты', icon: <IconGridAll /> },
  { id: 'casino', label: 'Казино', icon: <IconProviders size={ICON_SIZE} /> },
  { id: 'live', label: 'Лайв Казино', icon: <IconLiveCasino /> },
  { id: 'popular', label: 'Популярные', icon: <IconFlame /> },
  { id: 'new', label: 'Новые', icon: <IconNewGames /> },
  { id: 'bonus', label: 'Покупка бонуса', icon: <IconBonusBuy /> },
  {
    id: 'search',
    label: 'Найти игру',
    icon: <Icon Svg={IconSearch} width={ICON_SIZE} height={ICON_SIZE} />,
  },
];
