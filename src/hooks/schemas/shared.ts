
export interface Message {
  id: string;
  en: string;
}

export interface BaseResponse<T> {
  message: Message;
  data: T;
}

export interface Pagination {
  current_page: number,
  per_page: number,
  total_page: number,
  total_data: number
}

export interface BaseTableResponse<T> {
  message: Message;
  data: T[];
  paginate: Pagination
}
