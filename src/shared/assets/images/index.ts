import game1 from './1.png';
import game10 from './10.png';
import game11 from './11.png';
import game12 from './12.png';
import game13 from './13.png';
import game14 from './14.png';
import game15 from './15.png';
import game16 from './16.png';
import game2 from './2.png';
import game3 from './3.png';
import game4 from './4.png';
import game5 from './5.png';
import game6 from './6.png';
import game7 from './7.png';
import game8 from './8.png';
import game9 from './9.png';
import gamePlaceholder from './game-placeholder.svg';

export const gamePlaceholderUrl = gamePlaceholder;

const gameImageUrls: string[] = [
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
  game13,
  game14,
  game15,
  game16,
];

export function getGameImageUrl(index: number): string {
  return gameImageUrls[index % gameImageUrls.length];
}
