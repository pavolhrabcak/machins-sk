"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { searchData, type SearchEntry } from "@/lib/searchData";

function search(query: string): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  return searchData
    .map((entry) => {
      const inTitle = entry.title.toLowerCase().includes(q) ? 10 : 0;
      const inDesc = entry.description.toLowerCase().includes(q) ? 5 : 0;
      const inBody = entry.body.toLowerCase().includes(q) ? 1 : 0;
      return { entry, score: inTitle + inDesc + inBody };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry)
    .slice(0, 7);
}

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const found = search(query);
    setResults(found);
    if (found.length > 0) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDropdownPos({ top: rect.bottom, left: rect.left, width: rect.width });
      }
      setOpen(true);
    } else {
      setOpen(false);
    }
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      const insideContainer = containerRef.current?.contains(target);
      const insideDropdown = dropdownRef.current?.contains(target);
      if (!insideContainer && !insideDropdown) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleSlash(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleSlash);
    return () => document.removeEventListener("keydown", handleSlash);
  }, []);

  const navigate = useCallback(
    (url: string) => {
      router.push(`${url}?q=${encodeURIComponent(query)}`);
      setOpen(false);
      setQuery("");
    },
    [router, query]
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      navigate(results[activeIndex].url);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const dropdown =
    open && mounted && dropdownPos
      ? createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "fixed",
              top: dropdownPos.top,
              left: dropdownPos.left,
              width: dropdownPos.width,
              zIndex: 9999,
            }}
            className="bg-white rounded shadow-lg border border-gray-200 overflow-hidden"
          >
            {results.map((result, i) => (
              <button
                key={result.url}
                onClick={() => navigate(result.url)}
                className={`w-full text-left px-3 py-2 border-b border-gray-100 last:border-0 transition-colors ${
                  i === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="text-sm font-medium text-[#003366]">{result.title}</div>
                <div className="text-xs text-gray-500 mt-0.5 truncate">{result.description}</div>
              </button>
            ))}
          </div>,
          document.body
        )
      : null;

  return (
    <div ref={containerRef} className="relative px-3 pb-3 pt-2">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          placeholder="Hľadať…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-8 pr-6 py-1.5 text-sm rounded border border-gray-300 bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-[#003366]/50 focus:ring-1 focus:ring-[#003366]/20"
        />
        {!query && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none font-mono">/</span>
        )}
        <svg
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      {dropdown}
    </div>
  );
}
