"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

interface SearchEntry {
  title: string;
  url: string;
  description: string;
  body: string;
}

let cachedIndex: SearchEntry[] | null = null;

async function loadIndex(): Promise<SearchEntry[]> {
  if (cachedIndex) return cachedIndex;
  const res = await fetch("/search-data.json");
  cachedIndex = await res.json();
  return cachedIndex!;
}

function normalize(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function searchEntries(entries: SearchEntry[], query: string): SearchEntry[] {
  const q = normalize(query.trim());
  return entries
    .map((entry) => {
      const inTitle = normalize(entry.title).includes(q) ? 10 : 0;
      const inDesc = normalize(entry.description).includes(q) ? 5 : 0;
      const inBody = normalize(entry.body).includes(q) ? 1 : 0;
      return { entry, score: inTitle + inDesc + inBody };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry)
    .slice(0, 7);
}

const SearchIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function SearchInput({
  inputRef,
  containerRef,
  dropdownRef,
  query,
  results,
  activeIndex,
  open,
  mounted,
  dropdownPos,
  onChange,
  onKeyDown,
  onNavigate,
  className,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  query: string;
  results: SearchEntry[];
  activeIndex: number;
  open: boolean;
  mounted: boolean;
  dropdownPos: { top: number; left: number; width: number } | null;
  onChange: (v: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onNavigate: (url: string) => void;
  className?: string;
}) {
  const dropdown =
    open && mounted && dropdownPos
      ? createPortal(
          <div
            ref={dropdownRef}
            style={{ position: "fixed", top: dropdownPos.top, left: dropdownPos.left, width: dropdownPos.width, zIndex: 9999 }}
            className="bg-white rounded shadow-lg border border-gray-200 overflow-hidden"
          >
            {results.map((result, i) => (
              <button
                key={result.url}
                onClick={() => onNavigate(result.url)}
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
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <input
        ref={inputRef}
        type="search"
        placeholder="Hľadať…"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full pl-7 pr-6 py-1.5 text-sm rounded border border-white/30 bg-white/10 text-white placeholder-white/50 outline-none focus:border-white/60 focus:bg-white/20"
      />
      {!query && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-xs pointer-events-none font-mono">/</span>
      )}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
        <SearchIcon size={13} />
      </span>
      {dropdown}
    </div>
  );
}

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeContainerRef = mobileExpanded ? mobileContainerRef : desktopContainerRef;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }
    let cancelled = false;
    loadIndex().then((index) => {
      if (cancelled) return;
      const found = searchEntries(index, q);
      setResults(found);
      if (found.length > 0 && activeContainerRef.current) {
        const rect = activeContainerRef.current.getBoundingClientRect();
        setDropdownPos({ top: rect.bottom, left: rect.left, width: rect.width });
        setOpen(true);
      } else {
        setOpen(false);
      }
      setActiveIndex(-1);
    });
    return () => { cancelled = true; };
  }, [query, mobileExpanded]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const t = e.target as Node;
      const insideDesktop = desktopContainerRef.current?.contains(t);
      const insideMobile = mobileContainerRef.current?.contains(t);
      const insideDropdown = dropdownRef.current?.contains(t);
      if (!insideDesktop && !insideMobile && !insideDropdown) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setMobileExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navigate = useCallback(
    (url: string) => {
      router.push(`${url}?q=${encodeURIComponent(query)}`);
      setOpen(false);
      setQuery("");
      setMobileExpanded(false);
    },
    [router, query]
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      setMobileExpanded(false);
      setQuery("");
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      navigate(results[activeIndex].url);
    }
  }

  function closeMobile() {
    setMobileExpanded(false);
    setOpen(false);
    setQuery("");
  }

  const sharedProps = { inputRef, dropdownRef, query, results, activeIndex, open, mounted, dropdownPos, onChange: setQuery, onKeyDown: handleKeyDown, onNavigate: navigate };

  return (
    <>
      {/* Desktop: always visible */}
      <SearchInput {...sharedProps} containerRef={desktopContainerRef} className="hidden md:block w-52" />

      {/* Mobile: icon or expanded overlay */}
      <div className="md:hidden">
        {!mobileExpanded ? (
          <button
            onClick={() => { setMobileExpanded(true); setTimeout(() => inputRef.current?.focus(), 10); }}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Hľadať"
          >
            <SearchIcon size={20} />
          </button>
        ) : (
          <div className="fixed inset-x-0 top-0 h-14 z-50 bg-[#003366] border-b border-[#002244] flex items-center gap-3 px-4">
            <SearchInput {...sharedProps} containerRef={mobileContainerRef} className="flex-1" />
            <button onClick={closeMobile} className="text-white/70 hover:text-white transition-colors shrink-0" aria-label="Zavrieť">
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
