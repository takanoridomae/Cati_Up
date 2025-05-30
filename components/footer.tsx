"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">キャッチアップ.com</h3>
            <p className="text-sm text-muted-foreground">
              エンジニアの情報収集をもっと効率的に。
              複数のソースから最新の技術記事をまとめてチェック。
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground">
                  機能紹介
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  ソース一覧
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">ソーシャル</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} キャッチアップ.com - エンジニアの情報収集をもっと効率的に
          </p>
        </div>
      </div>
    </footer>
  );
}