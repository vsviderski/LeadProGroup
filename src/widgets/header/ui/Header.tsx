import { useState } from 'react';
import { Button, Icon } from '@shared/ui';
import { IconMenu } from '@shared/assets/icons';
import { SearchField } from './SearchField/SearchField';
import { Logo, APP_NAME } from './Logo/Logo';
import { LogoIcon } from './Logo/LogoIcon';
import { cn } from '@shared/lib';

interface HeaderProps {
  onSearchChange?: (value: string) => void;
  searchValue?: string;
  onMenuClick?: () => void;
  className?: string;
}

export function Header({
  searchValue: controlledSearch,
  onSearchChange,
  onMenuClick,
  className,
}: HeaderProps) {
  const [internalSearch, setInternalSearch] = useState('');
  const isControlled = onSearchChange != null;
  const searchValue = isControlled ? (controlledSearch ?? '') : internalSearch;
  const handleSearchChange = isControlled ? onSearchChange! : setInternalSearch;

  return (
    <header
      className={cn(
        'relative z-10 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-white/5 bg-[rgba(36,36,58,0.2)] px-3 backdrop-blur-[120px] sm:gap-4 sm:px-4 md:h-[62px] md:px-4',
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-8 lg:gap-[107px]">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="order-1 flex size-10 shrink-0 items-center justify-center rounded-lg text-white/90 transition-[color,background-color,transform] duration-200 ease-out hover:scale-105 hover:bg-white/10 hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30 md:hidden"
            aria-label="Открыть меню"
          >
            <Icon Svg={IconMenu} width={24} height={24} />
          </button>
        )}
        <div className="order-2 flex min-w-0 flex-1 justify-center md:justify-start">
          <SearchField
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full min-w-0 max-w-[324px] md:max-w-[324px] lg:max-w-[480px]"
          />
        </div>
        <span
          className="order-3 ml-auto flex shrink-0 items-center md:order-1 md:ml-0"
          role="img"
          aria-label={APP_NAME}
        >
          <span className="hidden md:inline">
            <Logo />
          </span>
          <span className="md:hidden">
            <LogoIcon size={32} />
          </span>
        </span>
      </div>
      <div className="hidden h-9 shrink-0 items-center gap-2 sm:gap-3 md:flex md:h-[46px]">
        <Button variant="secondary" className="text-sm px-3 sm:px-4">
          Вход
        </Button>
        <Button variant="primary" className="text-sm px-3 sm:px-4">
          Регистрация
        </Button>
      </div>
    </header>
  );
}
