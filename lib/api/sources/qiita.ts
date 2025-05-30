import axios from 'axios';
import { QiitaArticle, NormalizedArticle } from '../types';

const QIITA_API_URL = 'https://qiita.com/api/v2/items';

export async function fetchQiitaArticles(): Promise<NormalizedArticle[]> {
  try {
    const response = await axios.get<QiitaArticle[]>(QIITA_API_URL, {
      params: {
        page: 1,
        per_page: 20,
        sort: 'created'
      }
    });
    
    return response.data.map(article => ({
      id: `qiita-${article.id}`,
      title: article.title,
      url: article.url,
      published_at: article.created_at,
      source_id: 'qiita',
      likes: article.likes_count
    }));
  } catch (error) {
    console.error('Error fetching Qiita articles:', error);
    return [];
  }
}