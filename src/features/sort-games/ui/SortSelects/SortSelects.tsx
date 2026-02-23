import { Select } from '@shared/ui';
import type { SortState } from '../../model/types';

export interface SortSelectsProps {
  state: SortState;
  onSortChange: (state: Partial<SortState>) => void;
  providerOptions: { value: string; label: string }[];
  className?: string;
}

export function SortSelects({
  state,
  onSortChange,
  providerOptions,
  className,
}: SortSelectsProps) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col gap-2.5 min-[485px]:flex-row min-[485px]:flex-initial min-[485px]:flex-wrap min-[485px]:items-center ${className ?? ''}`}
    >
      <div className="min-w-full w-full min-[485px]:min-w-0 min-[485px]:w-auto min-[485px]:min-w-[140px]">
        <Select
          label="Сортировать по"
          options={[
            { value: 'popularity', label: 'Популярности' },
          ]}
          value={state.field}
          onValueChange={(value) =>
            onSortChange({ field: value as SortState['field'] })
          }
        />
      </div>
      <div className="min-w-full w-full min-[485px]:min-w-0 min-[485px]:w-auto min-[485px]:min-w-[140px]">
        <Select
          label="Провайдер"
          options={[{ value: '', label: 'Выбрать' }, ...providerOptions]}
          value={state.providerId ?? ''}
          onValueChange={(value) =>
            onSortChange({ providerId: value || null })
          }
        />
      </div>
    </div>
  );
}
