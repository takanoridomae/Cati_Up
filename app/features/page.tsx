import { Terminal, Zap, LineChart, Shield } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">主な機能</h1>
          <p className="text-lg text-muted-foreground">
            エンジニアの情報収集をより効率的にする機能を提供しています
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-lg border p-6">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">複数ソースの統合</h2>
            <p className="text-muted-foreground">
              Zenn、Qiita、Hacker Newsなど、複数の技術情報ソースを一つのインターフェースで閲覧できます。
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">リアルタイム更新</h2>
            <p className="text-muted-foreground">
              各ソースの最新記事をリアルタイムで取得し、常に最新の技術情報をキャッチアップできます。
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">トレンド分析</h2>
            <p className="text-muted-foreground">
              人気の技術トピックやトレンドを可視化し、技術動向を把握できます。
            </p>
          </div>

          <div className="space-y-4 rounded-lg border p-6">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">カスタマイズ可能</h2>
            <p className="text-muted-foreground">
              興味のある技術カテゴリーやソースを選択し、パーソナライズされた情報フィードを作成できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}