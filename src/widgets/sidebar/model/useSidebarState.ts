import { useState, useMemo, useCallback } from 'react';
import { DEFAULT_NAV_ITEMS } from './constants';
import type { NavItem } from './types';

export interface SidebarStateItem extends NavItem {
  active: boolean;
}

export function useSidebarState(initialNavId: string | null = 'games') {
  const [activeNavId, setActiveNavId] = useState<string | null>(initialNavId);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const navItems = useMemo<SidebarStateItem[]>(
    () =>
      DEFAULT_NAV_ITEMS.map((item) => ({
        ...item,
        active: item.id === activeNavId,
      })),
    [activeNavId]
  );

  const handleNavSelect = useCallback((id: string) => {
    setActiveNavId(id);
    setSidebarOpen(false);
  }, []);

  return {
    activeNavId,
    setActiveNavId,
    sidebarOpen,
    openSidebar,
    closeSidebar,
    navItems,
    handleNavSelect,
  };
}
