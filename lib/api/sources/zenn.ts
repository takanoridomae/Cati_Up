import axios from 'axios';
import { ZennArticle, NormalizedArticle } from '../types';

const ZENN_API_URL = 'https://zenn.dev/api/articles';

export async function fetchZennArticles(): Promise<NormalizedArticle[]> {
  try {
    const response = await axios.get<{ articles: ZennArticle[] }>(ZENN_API_URL);
    
    return response.data.articles.map(article => ({
      id: `zenn-${article.id}`,
      title: article.title,
      url: `https://zenn.dev/articles/${article.slug}`,
      published_at: article.published_at,
      source_id: 'zenn',
      likes: article.liked_count
    }));
  } catch (error) {
    console.error('Error fetching Zenn articles:', error);
    return [];
  }
}