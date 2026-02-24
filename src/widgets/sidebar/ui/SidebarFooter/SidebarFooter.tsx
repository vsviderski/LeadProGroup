import { Button } from '@shared/ui';
import { cn } from '@shared/lib';

export interface SidebarFooterProps {
  className?: string;
}

export function SidebarFooter({ className }: SidebarFooterProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 [&>*]:flex-none [&>*]:h-[46px]',
        className
      )}
    >
      <Button variant="secondary" className="w-full justify-center text-sm">
        Вход
      </Button>
      <Button variant="primary" className="w-full justify-center text-sm">
        Регистрация
      </Button>
    </div>
  );
}
