/**
 * Модель сущности "Игра" для карточки и списка.
 */
export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  provider?: string;
  category?: string;
  tagIds?: string[];
}
