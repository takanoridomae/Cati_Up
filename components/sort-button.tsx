"use client";

import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface SortButtonProps {
  ascending: boolean;
  onToggleSort: () => void;
}

export function SortButton({ ascending, onToggleSort }: SortButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleSort}
            className="h-9 w-9"
          >
            {ascending ? (
              <ArrowUpAZ className="h-4 w-4" />
            ) : (
              <ArrowDownAZ className="h-4 w-4" />
            )}
            <span className="sr-only">
              {ascending ? "古い順に並べ替え" : "新しい順に並べ替え"}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{ascending ? "古い順に並べ替え" : "新しい順に並べ替え"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}