import type { Game } from '../types/types';
import { getGameImageUrl } from '@shared/assets/images';

const MOCK_TAG_IDS = ['fast', 'slots', 'casino', 'live', 'popular', 'new', 'bonus'] as const;

const MOCK_TITLES = [
  'Gates Of Olympus',
  'Sweet Bonanza',
  'Book of Dead',
  'Starburst',
  "Gonzo's Quest",
  'Big Bass Bonanza',
  'Wolf Gold',
  'The Dog House',
  'Reactoonz',
  'Fire Joker',
  'Sugar Rush',
  'Fruit Party',
  'Rise of Olympus',
  'Legacy of Dead',
  'Buffalo King',
];

function createMockGame(index: number): Game {
  const tagCount = 2 + (index % 2);
  const tagIds: string[] = [];

  for (let j = 0; j < MOCK_TAG_IDS.length && tagIds.length < tagCount; j++) {
    const id = MOCK_TAG_IDS[(index + j) % MOCK_TAG_IDS.length];
    if (!tagIds.includes(id)) tagIds.push(id);
  }

  return {
    id: `game-${index + 1}`,
    title: MOCK_TITLES[index % MOCK_TITLES.length],
    imageUrl: getGameImageUrl(index),
    popularity: 1 + (index % 10),
    category: index % 3 === 0 ? 'slots' : 'casino',
    tagIds,
  };
}

const MOCK_GAMES_COUNT = 150;

export const MOCK_GAMES: Game[] = Array.from({ length: MOCK_GAMES_COUNT }, (_, i) => createMockGame(i));
