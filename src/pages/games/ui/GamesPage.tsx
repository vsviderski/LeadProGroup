import { Header } from '@widgets/header';
import { Sidebar } from '@widgets/sidebar';
import { Breadcrumbs } from '@widgets/breadcrumbs';
import { FilterBar } from '@widgets/filter-bar';
import { TagBar, DEFAULT_TAGS, FILTER_TAG_IDS, filterByTagId } from '@features/filter-by-tag';
import { Button, Layout as AppLayout } from '@shared/ui';
import { useInfiniteScroll } from '@shared/lib';
import type { Game } from '@entities/game';
import type { SortState } from '@features/sort-games';
import { DEFAULT_NAV_ITEMS } from '@widgets/sidebar';
import { ContentGrid } from './ContentGrid/ContentGrid';
import { getGameImageUrl } from '@shared/assets/images';
import { useState, useCallback } from 'react';

function createMockGame(index: number): Game {
  const i = index % FILTER_TAG_IDS.length;
  return {
    id: `game-${index + 1}`,
    title: 'Gates Of Olympus',
    imageUrl: getGameImageUrl(index),
    provider: 'Pragmatic Play',
    tagIds: [FILTER_TAG_IDS[i], ...(index % 3 === 0 ? [FILTER_TAG_IDS[(i + 1) % FILTER_TAG_IDS.length]] : [])],
  };
}

const INITIAL_GAMES = Array.from({ length: 12 }, (_, i) => createMockGame(i));
const PAGE_SIZE = 12;
const defaultSortState: SortState = {
  field: 'popularity',
  order: 'asc',
  providerId: null,
};
const providerOptions = [
  { value: 'pragmatic', label: 'Pragmatic Play' },
  { value: 'netent', label: 'NetEnt' },
];

export function GamesPage() {
  const [games, setGames] = useState<Game[]>(INITIAL_GAMES);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState('');
  const [activeTagId, setActiveTagId] = useState<string | null>('all');
  const [sortState, setSortState] = useState<SortState>(defaultSortState);
  const [activeNavId, setActiveNavId] = useState<string | null>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const start = games.length;
      const next = Array.from({ length: PAGE_SIZE }, (_, i) => createMockGame(start + i));
      setGames((prev) => [...prev, ...next]);
      setHasMore(games.length + next.length < 60);
      setLoading(false);
    }, 600);
  }, [games.length, hasMore, loading]);

  const { sentinelRef } = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    loading,
  });

  const navItems = DEFAULT_NAV_ITEMS.map((item) => ({
    ...item,
    active: item.id === activeNavId,
  }));

  return (
    <AppLayout
      header={
        <Header
          searchValue={search}
          onSearchChange={setSearch}
          onMenuClick={() => setSidebarOpen(true)}
        />
      }
      sidebar={
        <Sidebar
          items={navItems}
          activeId={activeNavId}
          onNavSelect={(id) => {
            setActiveNavId(id);
            setSidebarOpen(false);
          }}
        />
      }
      sidebarOpen={sidebarOpen}
      onSidebarClose={() => setSidebarOpen(false)}
      sidebarFooter={
        <div className="flex flex-col gap-2 [&>*]:flex-none [&>*]:h-[46px]">
          <Button variant="auth-login" className="w-full justify-center text-sm">
            Вход
          </Button>
          <Button variant="auth-register" className="w-full justify-center text-sm">
            Регистрация
          </Button>
        </div>
      }
    >
      <Breadcrumbs items={[{ label: 'Главная' }, { label: 'игры' }]} className="mb-4" />

      <FilterBar
        sortState={sortState}
        onSortChange={(patch) => setSortState((s) => ({ ...s, ...patch }))}
        providerOptions={providerOptions}
        className="mb-5"
      />

      <TagBar tags={DEFAULT_TAGS} activeId={activeTagId} onSelect={setActiveTagId} className="mb-6" />

      <ContentGrid games={filterByTagId(games, activeTagId)} loading={loading} />

      <div ref={sentinelRef} className="h-4" aria-hidden />
    </AppLayout>
  );
}
