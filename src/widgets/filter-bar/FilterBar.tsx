import { Icon } from '@shared/ui';
import { IconFilter } from '@shared/assets/icons';
import { SortSelects, useSortState } from '@features/sort-games';
import { cn } from '@shared/lib';

export interface FilterBarProps {
  title?: string;
  className?: string;
}

export function FilterBar({ title = 'Игры', className }: FilterBarProps) {
  const { sortState, onSortChange } = useSortState();

  return (
    <div className={cn('flex flex-col gap-3 sm:gap-5', className)}>
      <h1 className="text-lg font-bold text-white sm:text-xl">{title}</h1>
      <div className="flex w-full flex-wrap items-center gap-2 rounded-xl bg-[rgba(36,36,58,0.5)] px-2 py-2 min-[500px]:w-fit sm:gap-2.5">
        <SortSelects state={sortState} onSortChange={onSortChange} />
        <button
          type="button"
          className="hidden h-9 w-9 shrink-0 items-center justify-center self-end rounded-lg text-white hover:bg-white/10 min-[500px]:flex"
          aria-label="Фильтры"
        >
          <Icon Svg={IconFilter} width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
