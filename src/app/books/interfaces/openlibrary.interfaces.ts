// Interfaces para Search API
export interface SearchResponse {
  docs: SearchBook[];
  numFound: number;
  start: number;
}

export interface SearchBook {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  isbn?: string[];
  cover_i?: number;
}

// Interfaces para Books/Works API
export interface WorkResponse {
  key: string;
  title: string;
  description?: string | { value: string };
  authors?: { author: { key: string } }[];
  covers?: number[];
  first_publish_date?: string;
}

// Interfaces para Authors API
export interface AuthorResponse {
  key: string;
  name: string;
  birth_date?: string;
  death_date?: string;
  bio?: string | { value: string };
  photos?: number[];
}

export interface AuthorWorksResponse {
  entries: AuthorWork[];
}

export interface AuthorWork {
  key: string;
  title: string;
  first_publish_year?: number;
}

