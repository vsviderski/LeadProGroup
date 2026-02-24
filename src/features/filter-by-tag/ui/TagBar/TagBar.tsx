import { Tag, Separator } from '@shared/ui';
import type { TagItem } from '../../model/types/types';

export interface TagBarProps {
  tags: TagItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

export function TagBar({ tags, activeId, onSelect, className }: TagBarProps) {
  return (
    <div
      className={`flex items-center gap-3 overflow-x-auto pb-2 md:flex-wrap md:gap-4 md:overflow-visible md:pb-0 ${className ?? ''}`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {tags.map((tag, index) => (
        <span key={tag.id} className="flex shrink-0 items-center gap-3 md:gap-4">
          <Tag active={activeId === tag.id} icon={tag.icon} onClick={() => onSelect(tag.id)}>
            {tag.label}
          </Tag>
          {index < tags.length - 1 && <Separator orientation="diagonal" />}
        </span>
      ))}
    </div>
  );
}
