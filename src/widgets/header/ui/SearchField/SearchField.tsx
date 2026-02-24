import { InputSearch } from '@shared/ui';

export interface SearchFieldProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchField({
  value,
  onChange,
  placeholder = 'Поиск по порталу',
  className,
}: SearchFieldProps) {
  return (
    <InputSearch
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={className}
    />
  );
}
