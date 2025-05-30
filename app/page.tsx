import { Suspense } from "react";
import { sources, getArticlesWithSources } from "@/lib/data";
import { ArticleList } from "@/components/article-list";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const articles = getArticlesWithSources();

  return (
    <div className="container py-8">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            エンジニアの情報収集をもっと効率的に
          </h1>
          <p className="text-lg text-muted-foreground">
            Zenn、Qiita、Hacker Newsなど複数のソースから最新の技術記事を一覧で確認できます
          </p>
        </div>

        <Suspense
          fallback={
            <div className="space-y-6">
              <div className="flex justify-between">
                <Skeleton className="h-10 w-[180px]" />
                <Skeleton className="h-10 w-10" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-[180px] w-full rounded-xl" />
                ))}
              </div>
            </div>
          }
        >
          <ArticleList initialArticles={articles} sources={sources} />
        </Suspense>
      </section>
    </div>
  );
}