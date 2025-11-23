"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Search, X, Loader2 } from "lucide-react";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchTerm: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (searchTerm !== initialSearch) {
            setIsSearching(true);
            router.replace(`/gallery?search=${encodeURIComponent(searchTerm)}`);
            router.refresh();
            setTimeout(() => setIsSearching(false), 1000);
          }
        }, 500);
      };
    })(),
    [router, initialSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTagName(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
    router.refresh();
    setTimeout(() => setIsSearching(false), 1000);
  };

  const clearSearch = () => {
    setTagName("");
    setIsSearching(true);
    router.replace("/gallery");
    router.refresh();
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-3">
        <Label htmlFor="tag-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Search By Tag
        </Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <Input
            className="pl-10 pr-10 rounded-xl border-slate-300 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
            onChange={handleInputChange}
            id="tag-name"
            value={tagName}
            placeholder="Search by tag name..."
          />
          {tagName && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-slate-600 transition-colors duration-200"
            >
              <X className="h-4 w-4 text-slate-400 hover:text-slate-600" />
            </button>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          disabled={isSearching}
        >
          {isSearching ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Search
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
