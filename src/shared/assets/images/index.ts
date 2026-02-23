/**
 * Изображения карточек игр из Figma и плейсхолдер.
 */
import gamePlaceholder from './game-placeholder.svg';
import game1 from './game-1-2cb37b.png';
import game2 from './game-2.png';
import game3 from './game-3-294e3b.png';
import game4 from './game-4.png';
import game5 from './game-5-c079df.png';
import game6 from './game-6-120dd2.png';
import game7 from './game-7-33f68a.png';

export const gamePlaceholderUrl = gamePlaceholder;

const gameImageUrls: string[] = [
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
];

export { gameImageUrls };

export function getGameImageUrl(index: number): string {
  return gameImageUrls[index % gameImageUrls.length];
}
