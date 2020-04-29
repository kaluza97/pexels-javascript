export interface Params {
  [key: string]: string | number | undefined;
}

export interface PaginationObject {
  total_results: number;
  page: number;
  per_page: number;
  next_page: number;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}
