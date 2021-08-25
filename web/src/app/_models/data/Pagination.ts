export interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  userId: number;
  filterText: string;
  sortBy: string;
  isSortAscending: boolean;
  refreshCounter: boolean;
}

export class PaginationResult<T> {
  items: T;
  pagination: Pagination;
}

export class Column {
  title: string;
  key: string;
  isSortable: boolean;
  align: string;
  style: string;
}
