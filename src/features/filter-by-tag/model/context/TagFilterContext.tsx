import { createContext, useContext, useState, type ReactNode } from 'react';

interface TagFilterContextValue {
  activeTagId: string | null;
  setActiveTagId: (id: string | null) => void;
}

const TagFilterContext = createContext<TagFilterContextValue | null>(null);

export interface TagFilterProviderProps {
  children: ReactNode;
  initialTagId?: string | null;
}

export function TagFilterProvider({ children, initialTagId = 'all' }: TagFilterProviderProps) {
  const [activeTagId, setActiveTagId] = useState<string | null>(initialTagId);
  const value: TagFilterContextValue = { activeTagId, setActiveTagId };

  return <TagFilterContext.Provider value={value}>{children}</TagFilterContext.Provider>;
}

export function useTagFilter(): TagFilterContextValue {
  const ctx = useContext(TagFilterContext);
  if (!ctx) {
    throw new Error('useTagFilter must be used within TagFilterProvider');
  }
  return ctx;
}
