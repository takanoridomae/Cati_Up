import { NormalizedArticle } from './types';
import { fetchZennArticles } from './sources/zenn';
import { fetchQiitaArticles } from './sources/qiita';
import { fetchHackerNewsArticles } from './sources/hackernews';

export async function fetchAllArticles(): Promise<NormalizedArticle[]> {
  try {
    const [zennArticles, qiitaArticles, hackerNewsArticles] = await Promise.all([
      fetchZennArticles(),
      fetchQiitaArticles(),
      fetchHackerNewsArticles()
    ]);

    return [...zennArticles, ...qiitaArticles, ...hackerNewsArticles]
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export * from './types';