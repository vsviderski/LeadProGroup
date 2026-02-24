export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export { useInfiniteScroll } from './useInfiniteScroll';
export type { UseInfiniteScrollOptions } from './useInfiniteScroll';
