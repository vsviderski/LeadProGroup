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
      <Button variant="auth-login" className="w-full justify-center text-sm">
        Вход
      </Button>
      <Button variant="auth-register" className="w-full justify-center text-sm">
        Регистрация
      </Button>
    </div>
  );
}
