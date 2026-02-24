import { useState } from 'react';
import { cn } from '@shared/lib';
import { gamePlaceholderUrl } from '@shared/assets/images';
import type { Game } from '../../model/types/types';

export interface GameCardProps {
  game: Game;
  className?: string;
}

export function GameCard({ game, className }: GameCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = imgError ? gamePlaceholderUrl : game.imageUrl;

  return (
    <article
      className={cn(
        'group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-[#161426]',
        'transition-shadow duration-300 ease-out',
        'hover:shadow-[0_40px_80px_rgba(0,0,0,0.95),0_0_0_3px_rgba(255,255,255,0.35),0_0_80px_rgba(0,122,255,0.6)]',
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-[#161426]">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="mt-auto flex items-end justify-between gap-2">
          <h3 className="line-clamp-2 min-w-0 flex-1 text-xs leading-tight font-light text-white">
            {game.title}
          </h3>
          <span className="flex shrink-0 items-center" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={14}
              viewBox="0 0 10 14"
              fill="none"
              className="h-[14px] w-[10px]"
            >
              <path
                d="M0.000542196 9.09092C-0.0264378 6.41452 2.15566 4.21304 4.82658 4.17636C7.61194 4.13812 9.78802 6.36868 9.81842 9.0202C9.85062 11.8276 7.57554 13.9672 4.97142 13.9995C2.2277 14.0338 -0.0295818 11.7841 0.000542196 9.09092ZM0.48333 9.08124C0.460538 11.5122 2.45402 13.4727 4.8127 13.5151C7.32458 13.5604 9.31442 11.5428 9.3343 9.13152C9.35474 6.64872 7.3513 4.6644 4.91198 4.65916C2.4475 4.65392 0.461062 6.68512 0.48333 9.08124Z"
                fill="#F29200"
              />
              <path
                d="M2.03557 4.3786C1.69557 3.45652 1.17061 2.69056 0.343597 2.15119C0.753821 2.1656 1.12005 2.30836 1.45613 2.5284C1.79065 2.7474 2.05601 3.03792 2.27685 3.37896C2.07093 2.25964 1.89361 1.14292 1.97505 0C2.33997 0.437992 2.63441 0.919728 2.89165 1.42216C3.14861 1.9246 3.38177 2.43934 3.63533 2.95434C3.62537 2.55276 3.68221 2.16245 3.83337 1.78733C3.98557 1.40932 4.22345 1.09838 4.53961 0.841144C4.14905 1.75956 4.16529 2.69789 4.39213 3.66112C3.54417 3.70408 2.76509 3.9466 2.03557 4.3786Z"
                fill="#F29200"
              />
              <path
                d="M5.64388 5.39393C6.31604 5.42485 6.83156 5.67081 7.16296 6.24293C7.29236 6.46637 7.3264 6.86193 7.12496 7.07281C6.99424 7.20981 6.83028 7.27685 6.65268 7.31669C6.19816 7.41857 5.76516 7.34709 5.36644 7.11497C5.06024 6.93657 4.83444 6.67645 4.74456 6.32569C4.6348 5.89793 4.85564 5.54401 5.28604 5.44421C5.41228 5.41489 5.54408 5.40757 5.64388 5.39393Z"
                fill="#F29200"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
