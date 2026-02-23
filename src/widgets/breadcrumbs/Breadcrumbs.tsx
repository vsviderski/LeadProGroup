import { Icon } from '@shared/ui';
import { cn } from '@shared/lib';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <div
      className={cn('flex items-center gap-1.5 text-xs text-white', className)}
      aria-label="Хлебные крошки"
    >
      <Icon name="home-outline" size={12} aria-label="" />
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="opacity-50"> / </span>}
        </span>
      ))}
    </div>
  );
}
