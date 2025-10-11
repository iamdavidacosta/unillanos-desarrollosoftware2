export interface Book {
  id: string;
  title: string;
  author: string;
  cover_url?: string;
  first_publish_year?: number;
}

export interface BookDetails {
  key: string;
  title: string;
  description?: string | { value: string };
  covers?: number[];
  first_publish_date?: string;
}
