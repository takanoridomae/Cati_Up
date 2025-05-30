import useSWR from 'swr';
import { NormalizedArticle } from '@/lib/api/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useArticles() {
  const { data, error, isLoading } = useSWR<NormalizedArticle[]>('/api/articles', fetcher, {
    refreshInterval: 300000, // Refresh every 5 minutes
  });

  return {
    articles: data || [],
    isLoading,
    isError: error
  };
}