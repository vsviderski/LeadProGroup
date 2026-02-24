const NO_FILTER_IDS = ['all', 'search'];

export function filterByTagId<T extends { tagIds?: string[] }>(items: T[], tagId: string | null): T[] {
  if (!tagId || NO_FILTER_IDS.includes(tagId)) return items;
  return items.filter((item) => item.tagIds?.includes(tagId));
}
