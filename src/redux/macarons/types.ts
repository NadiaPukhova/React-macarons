export type Macarons = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface MacaronsSliceState {
  items: Macarons[];
  status: Status;
}

export type SearchMacaronsParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
