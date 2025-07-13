export type PageQueryOptions = {
  paginate?: {
    page: number;  // Уберите "?", если поля обязательные
    limit: number;
  };
  filter?: {
    completed?: boolean;
    title?: { contains: string };
  };
  // Остальные поля должны точно соответствовать API
  operators?: unknown[];
  search?: unknown;
  slice?: { limit?: number; offset?: number };
  sort?: { field: string; order: 'ASC' | 'DESC' }[];
};