"use client";

import { useState } from "react";
import { Source } from "@/types";
import { useArticles } from "@/hooks/use-articles";
import { ArticleCard } from "@/components/article-card";
import { SourceFilter } from "@/components/source-filter";
import { SortButton } from "@/components/sort-button";

interface ArticleListProps {
  sources: Source[];
}

export function ArticleList({ sources }: ArticleListProps) {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [ascending, setAscending] = useState(false);
  
  const { articles, isLoading, isError } = useArticles();
  
  // Filter articles by selected source
  const filteredArticles = selectedSource
    ? articles.filter(article => article.source_id === selectedSource)
    : articles;
  
  // Sort articles by date
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const dateA = new Date(a.published_at).getTime();
    const dateB = new Date(b.published_at).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
  
  if (isError) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
        <p className="text-center text-muted-foreground">
          記事の取得中にエラーが発生しました
        </p>
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="h-10 w-[180px] animate-pulse bg-muted" />
          <div className="h-10 w-10 animate-pulse bg-muted" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[180px] animate-pulse rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <SourceFilter
          sources={sources}
          selectedSource={selectedSource}
          onSourceChange={setSelectedSource}
        />
        <SortButton
          ascending={ascending}
          onToggleSort={() => setAscending(!ascending)}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      {sortedArticles.length === 0 && (
        <div className="flex h-[200px] items-center justify-center rounded-lg border border-dashed">
          <p className="text-center text-muted-foreground">
            記事が見つかりませんでした
          </p>
        </div>
      )}
    </div>
  );
}