import { Article, Source } from "@/types";

// Mock data for sources
export const sources: Source[] = [
  {
    id: "zenn",
    name: "Zenn",
    url: "https://zenn.dev",
    color: "#3EA8FF",
  },
  {
    id: "qiita",
    name: "Qiita",
    url: "https://qiita.com",
    color: "#55C500",
  },
  {
    id: "hackernews",
    name: "Hacker News",
    url: "https://news.ycombinator.com",
    color: "#FF6600",
  },
  {
    id: "devto",
    name: "DEV.to",
    url: "https://dev.to",
    color: "#0A0A0A",
  },
];

// Generate realistic mock data for articles
export const articles: Article[] = [
  // Zenn articles
  {
    id: "z1",
    title: "Next.js 14の新機能と変更点まとめ",
    url: "https://zenn.dev/example/articles/nextjs-14-features",
    published_at: "2023-11-02T10:30:00Z",
    source_id: "zenn",
  },
  {
    id: "z2",
    title: "TypeScriptの型システムを完全に理解する",
    url: "https://zenn.dev/example/articles/typescript-type-system",
    published_at: "2023-11-01T08:15:00Z",
    source_id: "zenn",
  },
  {
    id: "z3",
    title: "React Server Componentsでパフォーマンスを最適化する方法",
    url: "https://zenn.dev/example/articles/react-server-components-optimization",
    published_at: "2023-10-29T14:45:00Z",
    source_id: "zenn",
  },
  
  // Qiita articles
  {
    id: "q1",
    title: "GraphQLを使った効率的なAPI設計",
    url: "https://qiita.com/example/items/graphql-api-design",
    published_at: "2023-11-01T16:20:00Z",
    source_id: "qiita",
  },
  {
    id: "q2",
    title: "Dockerコンテナの最適化テクニック",
    url: "https://qiita.com/example/items/docker-optimization",
    published_at: "2023-10-31T09:10:00Z",
    source_id: "qiita",
  },
  {
    id: "q3",
    title: "効率的なGit開発フロー - GitHub Flow vs Git Flow",
    url: "https://qiita.com/example/items/git-workflows",
    published_at: "2023-10-28T11:35:00Z",
    source_id: "qiita",
  },
  
  // Hacker News articles
  {
    id: "h1",
    title: "Amazon's new AI service can build entire applications",
    url: "https://news.ycombinator.com/item?id=12345678",
    published_at: "2023-11-02T12:00:00Z",
    source_id: "hackernews",
  },
  {
    id: "h2",
    title: "The state of WebAssembly in 2023",
    url: "https://news.ycombinator.com/item?id=12345679",
    published_at: "2023-11-01T19:30:00Z",
    source_id: "hackernews",
  },
  {
    id: "h3",
    title: "Rust is becoming a critical part of the Linux kernel",
    url: "https://news.ycombinator.com/item?id=12345680",
    published_at: "2023-10-30T07:25:00Z",
    source_id: "hackernews",
  },
  
  // DEV.to articles
  {
    id: "d1",
    title: "Building a realtime chat application with WebSockets",
    url: "https://dev.to/example/realtime-chat-websockets",
    published_at: "2023-11-02T09:15:00Z",
    source_id: "devto",
  },
  {
    id: "d2",
    title: "The complete guide to CSS Grid Layout in 2023",
    url: "https://dev.to/example/css-grid-guide-2023",
    published_at: "2023-10-31T15:40:00Z",
    source_id: "devto",
  },
  {
    id: "d3",
    title: "Handling authentication in modern JavaScript applications",
    url: "https://dev.to/example/modern-js-auth",
    published_at: "2023-10-29T10:50:00Z",
    source_id: "devto",
  },
];

// Helper function to get source by ID
export function getSourceById(id: string): Source | undefined {
  return sources.find(source => source.id === id);
}

// Helper function to get articles with source information
export function getArticlesWithSources(): Article[] {
  return articles.map(article => ({
    ...article,
    source: getSourceById(article.source_id),
  }));
}

// Helper function to filter articles by source
export function filterArticlesBySource(sourceId: string | null): Article[] {
  const articlesWithSources = getArticlesWithSources();
  
  if (!sourceId) {
    return articlesWithSources;
  }
  
  return articlesWithSources.filter(article => article.source_id === sourceId);
}

// Helper function to sort articles by date
export function sortArticlesByDate(articles: Article[], ascending: boolean = false): Article[] {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.published_at).getTime();
    const dateB = new Date(b.published_at).getTime();
    
    return ascending ? dateA - dateB : dateB - dateA;
  });
}