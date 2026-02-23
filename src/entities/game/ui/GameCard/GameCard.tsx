import { useState } from 'react';
import { cn } from '@shared/lib';
import type { Game } from '../../model/types';

const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240"%3E%3Crect fill="%2324243A" width="320" height="240"/%3E%3Ctext fill="%23888" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14"%3EНет изображения%3C/text%3E%3C/svg%3E';

export interface GameCardProps {
  game: Game;
  className?: string;
}

export function GameCard({ game, className }: GameCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = imgError ? FALLBACK_IMAGE : game.imageUrl;

  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#24243A] transition-shadow hover:shadow-lg',
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161426]">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-xs font-normal leading-tight text-white line-clamp-2">
          {game.title}
        </h3>
        <div
          className="mt-auto h-9 w-9 shrink-0 rounded-full bg-[#24243A]"
          aria-hidden
        />
      </div>
    </article>
  );
}
