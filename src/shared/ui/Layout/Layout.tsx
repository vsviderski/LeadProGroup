import { Icon } from '../Icon/Icon';
import { IconClose } from '@shared/assets/icons';
import { cn } from '@shared/lib';

export interface LayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
  /** Нижний блок в шторке (например, кнопки Вход/Регистрация), виден только при открытой шторке (< md) */
  sidebarFooter?: React.ReactNode;
  /** На мобильных (< md) сайдбар открывается по кнопке меню (шторка); от планшетов — постоянная колонка */
  sidebarOpen?: boolean;
  onSidebarClose?: () => void;
  className?: string;
}

export function Layout({
  header,
  sidebar,
  children,
  sidebarFooter,
  sidebarOpen = false,
  onSidebarClose,
  className,
}: LayoutProps) {
  const hasDrawer = onSidebarClose != null;

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col bg-[#050414] text-white',
        className
      )}
    >
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
        <div
          className="absolute right-0 bottom-0 h-[357px] w-[608px] rounded-full bg-gradient-to-br from-[#007AFF] to-[#2BDBFF] opacity-30 blur-[590px]"
          aria-hidden
        />
      </div>

      {header}

      {/* Оверлей на весь экран: перекрывает и хедер */}
      {hasDrawer && sidebarOpen && (
        <button
          type="button"
          onClick={onSidebarClose}
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-[2px] transition-opacity md:hidden"
          aria-label="Закрыть меню"
        />
      )}

      <div className="flex min-h-0 flex-1">
        {/* Шторка только на мобильных (< md); от планшетов — обычная колонка */}
        <div
          className={cn(
            hasDrawer
              ? 'fixed left-0 top-0 z-30 flex h-dvh w-[min(280px,85vw)] flex-col bg-[#08071d] shadow-2xl transition-transform duration-300 ease-out md:relative md:z-auto md:mt-0 md:h-auto md:w-[220px] md:translate-x-0 md:shrink-0 md:shadow-none'
              : 'relative w-[220px] shrink-0',
            hasDrawer && !sidebarOpen && '-translate-x-full'
          )}
        >
          {hasDrawer && (
            <div className="flex justify-end border-b border-white/5 p-3 md:hidden">
              <button
                type="button"
                onClick={onSidebarClose}
                className="flex size-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Закрыть меню"
              >
                <Icon Svg={IconClose} width={24} height={24} />
              </button>
            </div>
          )}
          <div className="flex min-h-0 flex-1 flex-col">
            {sidebar}
            {sidebarFooter && (
              <div className="mt-auto border-t border-white/5 p-3 md:hidden">
                {sidebarFooter}
              </div>
            )}
          </div>
        </div>

        <main className="min-w-0 flex-1 px-3 pb-8 pt-4 sm:px-4">{children}</main>
      </div>
    </div>
  );
}
