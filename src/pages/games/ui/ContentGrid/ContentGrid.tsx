import type { Game } from '@entities/game';
import { GameCard } from '@entities/game';
import { cn } from '@shared/lib';
import { Loader } from '@shared/ui';

export interface ContentGridProps {
  games: Game[];
  loading?: boolean;
  className?: string;
}

export function ContentGrid({ games, loading = false, className }: ContentGridProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {loading && (
        <div className="mt-6 flex justify-center">
          <Loader size="lg" />
        </div>
      )}
    </div>
  );
}
