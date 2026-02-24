import { GamesPage } from '@pages/games';
import { Header } from '@widgets/header';
import { Sidebar, useSidebarState, SidebarFooter } from '@widgets/sidebar';
import { Layout as AppLayout } from '@shared/ui';

export function App() {
  const { sidebarOpen, openSidebar, closeSidebar, navItems, handleNavSelect, activeNavId } =
    useSidebarState();

  return (
    <AppLayout
      header={<Header onMenuClick={openSidebar} />}
      sidebar={<Sidebar items={navItems} activeId={activeNavId} onNavSelect={handleNavSelect} />}
      sidebarOpen={sidebarOpen}
      onSidebarClose={closeSidebar}
      sidebarFooter={<SidebarFooter />}
    >
      <GamesPage />
    </AppLayout>
  );
}
