import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { SortState } from '../types/types';

export const defaultSortState: SortState = {
  field: 'popularity',
  order: 'asc',
};

interface SortStateContextValue {
  sortState: SortState;
  setSortState: React.Dispatch<React.SetStateAction<SortState>>;
  onSortChange: (patch: Partial<SortState>) => void;
}

const SortStateContext = createContext<SortStateContextValue | null>(null);

export interface SortStateProviderProps {
  children: ReactNode;
  initialState?: SortState;
}

export function SortStateProvider({ children, initialState }: SortStateProviderProps) {
  const [sortState, setSortState] = useState<SortState>(initialState ?? defaultSortState);

  const onSortChange = useCallback((patch: Partial<SortState>) => {
    setSortState((s) => ({ ...s, ...patch }));
  }, []);

  const value: SortStateContextValue = {
    sortState,
    setSortState,
    onSortChange,
  };

  return <SortStateContext.Provider value={value}>{children}</SortStateContext.Provider>;
}

export function useSortState(): SortStateContextValue {
  const ctx = useContext(SortStateContext);
  if (!ctx) {
    throw new Error('useSortState must be used within SortStateProvider');
  }
  return ctx;
}
