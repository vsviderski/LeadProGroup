import { useState, useEffect, useMemo, useCallback } from 'react';
import { MOCK_GAMES, type Game } from '@entities/game';
import { filterByTagId } from '@features/filter-by-tag';
import type { SortState } from '@features/sort-games';
import { useInfiniteScroll } from '@shared/lib';

const PAGE_SIZE = 15;

export interface UseGamesListParams {
  activeTagId: string | null;
  sortState: SortState;
}

export function useGamesList({ activeTagId, sortState }: UseGamesListParams) {
  const [displayedCount, setDisplayedCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const filteredAndSorted = useMemo(() => {
    const list = filterByTagId(MOCK_GAMES, activeTagId);
    const { field, order } = sortState;
    const mult = order === 'asc' ? 1 : -1;

    return [...list].sort((a, b) => {
      const cmp =
        field === 'popularity'
          ? (a.popularity ?? 0) - (b.popularity ?? 0)
          : (a.title ?? '').localeCompare(b.title ?? '');
      return mult * cmp;
    });
  }, [activeTagId, sortState]);

  const games = useMemo<Game[]>(
    () => filteredAndSorted.slice(0, displayedCount),
    [filteredAndSorted, displayedCount]
  );

  const hasMore = displayedCount < filteredAndSorted.length;

  useEffect(() => {
    setDisplayedCount(PAGE_SIZE);
  }, [activeTagId, sortState]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + PAGE_SIZE, filteredAndSorted.length));
      setLoading(false);
    }, 600);
  }, [loading, hasMore, filteredAndSorted.length]);

  const { sentinelRef } = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    loading,
  });

  return {
    games,
    loading,
    sentinelRef,
  };
}
