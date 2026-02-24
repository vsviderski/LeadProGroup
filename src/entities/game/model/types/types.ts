export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  popularity?: number;
  category?: string;
  tagIds?: string[];
}
