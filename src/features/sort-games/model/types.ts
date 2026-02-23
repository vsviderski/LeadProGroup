export type SortField = 'popularity' | 'provider';
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  order: SortOrder;
  providerId: string | null;
}
