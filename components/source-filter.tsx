"use client";

import { useState } from "react";
import { Source } from "@/types";
import { Check, ChevronsUpDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface SourceFilterProps {
  sources: Source[];
  selectedSource: string | null;
  onSourceChange: (sourceId: string | null) => void;
}

export function SourceFilter({
  sources,
  selectedSource,
  onSourceChange,
}: SourceFilterProps) {
  const [open, setOpen] = useState(false);
  
  const selectedSourceName = selectedSource
    ? sources.find((source) => source.id === selectedSource)?.name
    : "すべてのソース";

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">フィルター:</span>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[180px] justify-between"
          >
            {selectedSourceName}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0">
          <Command>
            <CommandInput placeholder="ソースを検索..." />
            <CommandEmpty>ソースが見つかりません</CommandEmpty>
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    onSourceChange(null);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      !selectedSource ? "opacity-100" : "opacity-0"
                    )}
                  />
                  すべてのソース
                </CommandItem>
                {sources.map((source) => (
                  <CommandItem
                    key={source.id}
                    onSelect={() => {
                      onSourceChange(source.id);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedSource === source.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {source.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}