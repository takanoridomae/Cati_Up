export interface Source {
  id: string;
  name: string;
  url: string;
  logo?: string;
  color: string;
}

export interface Article {
  id: string;
  title: string;
  url: string;
  published_at: string;
  source_id: string;
  source?: Source;
}