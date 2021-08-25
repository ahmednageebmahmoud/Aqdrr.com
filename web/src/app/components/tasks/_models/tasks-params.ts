export interface TaskersParams {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    sortBy: string;
    filterText: string;
    isSortAscending: boolean;
    refreshCounter: boolean;
    userId: number;
    cityId: number;
    categories: number[];
}

export class TasksPaginationResult<T>  {
    items: T;
    pagination: TaskersParams;
}
