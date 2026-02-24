import { Breadcrumbs } from '@widgets/breadcrumbs';
import { FilterBar } from '@widgets/filter-bar';
import { TagBar, DEFAULT_TAGS, TagFilterProvider, useTagFilter } from '@features/filter-by-tag';
import { SortStateProvider, useSortState } from '@features/sort-games';
import { useGamesList } from '../hooks/useGamesList';
import { ContentGrid } from './ContentGrid/ContentGrid';

function GamesPageContent() {
  const { sortState } = useSortState();
  const { activeTagId, setActiveTagId } = useTagFilter();
  const { games, loading, sentinelRef } = useGamesList({
    activeTagId,
    sortState,
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Главная' }, { label: 'игры' }]} className="mb-4" />
      <FilterBar className="mb-5" />
      <TagBar tags={DEFAULT_TAGS} activeId={activeTagId} onSelect={setActiveTagId} className="mb-6" />
      <ContentGrid games={games} loading={loading} />
      <div ref={sentinelRef} className="h-4" aria-hidden />
    </>
  );
}

export function GamesPage() {
  return (
    <SortStateProvider>
      <TagFilterProvider>
        <GamesPageContent />
      </TagFilterProvider>
    </SortStateProvider>
  );
}
