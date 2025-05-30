import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "¥0",
    description: "個人での利用に最適",
    features: [
      "複数ソースからの記事取得",
      "基本的なフィルタリング機能",
      "1日の記事取得数に制限あり",
      "広告表示あり",
    ],
  },
  {
    name: "Pro",
    price: "¥980",
    period: "/月",
    description: "プロフェッショナルな利用に",
    features: [
      "無制限の記事取得",
      "広告なし",
      "高度なフィルタリング機能",
      "トレンド分析機能",
      "APIアクセス",
      "優先サポート",
    ],
  },
  {
    name: "Team",
    price: "¥4,980",
    period: "/月",
    description: "チームでの利用に最適",
    features: [
      "Proプランのすべての機能",
      "最大10名まで利用可能",
      "チーム管理機能",
      "カスタムインテグレーション",
      "専用サポート",
      "使用状況レポート",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">料金プラン</h1>
          <p className="text-lg text-muted-foreground">
            あなたのニーズに合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col space-y-6 rounded-lg border p-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">
                {plan.name === "Free" ? "無料で始める" : "申し込む"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}