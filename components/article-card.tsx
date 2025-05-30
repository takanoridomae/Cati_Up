"use client";

import { useState } from "react";
import { Article } from "@/types";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedDate = formatDistanceToNow(new Date(article.published_at), {
    addSuffix: true,
    locale: ja,
  });
  
  const source = article.source;
  const sourceColor = source?.color || "#888888";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-colors hover:no-underline focus:outline-none"
      >
        <Card className={cn(
          "h-full overflow-hidden transition-all duration-300",
          isHovered ? "shadow-md" : "shadow-sm"
        )}>
          <CardContent className="p-4 sm:p-5">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start justify-between">
                <Badge
                  variant="outline"
                  className="px-2 py-0.5 text-xs font-normal"
                  style={{
                    borderColor: sourceColor,
                    color: sourceColor
                  }}
                >
                  {source?.name}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formattedDate}
                </span>
              </div>
              
              <h3 className={cn(
                "line-clamp-2 text-base font-medium leading-tight transition-colors",
                isHovered ? "text-primary" : "text-foreground"
              )}>
                {article.title}
              </h3>
              
              <div className={cn(
                "flex items-center text-xs text-muted-foreground transition-opacity",
                isHovered ? "opacity-100" : "opacity-0"
              )}>
                <ExternalLink className="mr-1 h-3 w-3" />
                <span>開く</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}