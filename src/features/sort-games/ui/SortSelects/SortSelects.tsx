import { Select } from '@shared/ui';
import type { SortState } from '../../model/types/types';

const SORT_FIELD_OPTIONS: { value: SortState['field']; label: string }[] = [
  { value: 'popularity', label: 'Популярности' },
  { value: 'title', label: 'Названию' },
];

const SORT_ORDER_OPTIONS: { value: SortState['order']; label: string }[] = [
  { value: 'asc', label: 'По возрастанию' },
  { value: 'desc', label: 'По убыванию' },
];

export interface SortSelectsProps {
  state: SortState;
  onSortChange: (state: Partial<SortState>) => void;
  className?: string;
}

export function SortSelects({ state, onSortChange, className }: SortSelectsProps) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col gap-2.5 min-[500px]:flex-initial min-[500px]:flex-row min-[500px]:flex-wrap min-[500px]:items-center ${className ?? ''}`}
    >
      <div className="w-full min-w-full min-[500px]:w-[192px] min-[500px]:min-w-[192px]">
        <Select
          label="Сортировать по"
          options={SORT_FIELD_OPTIONS}
          value={state.field}
          onValueChange={(value) => onSortChange({ field: value as SortState['field'] })}
        />
      </div>
      <div className="w-full min-w-full min-[500px]:w-[192px] min-[500px]:min-w-[192px]">
        <Select
          label="Порядок"
          options={SORT_ORDER_OPTIONS}
          value={state.order}
          onValueChange={(value) => onSortChange({ order: value as SortState['order'] })}
        />
      </div>
    </div>
  );
}
