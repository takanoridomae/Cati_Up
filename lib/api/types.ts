export interface ZennArticle {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  liked_count: number;
  url: string;
}

export interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  created_at: string;
  likes_count: number;
}

export interface HackerNewsStory {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
}

export interface NormalizedArticle {
  id: string;
  title: string;
  url: string;
  published_at: string;
  source_id: string;
  likes?: number;
}