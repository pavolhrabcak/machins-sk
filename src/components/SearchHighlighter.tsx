"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function applyHighlights(root: Element, query: string) {
  const q = query.toLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  let node;
  while ((node = walker.nextNode())) {
    const el = (node as Text).parentElement;
    if (el?.closest("mark") || el?.tagName === "SCRIPT" || el?.tagName === "STYLE") continue;
    if ((node as Text).textContent?.toLowerCase().includes(q)) {
      nodes.push(node as Text);
    }
  }

  for (const textNode of nodes) {
    const text = textNode.textContent!;
    const lower = text.toLowerCase();
    const frag = document.createDocumentFragment();
    let last = 0;
    let idx;

    while ((idx = lower.indexOf(q, last)) !== -1) {
      if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));
      const mark = document.createElement("mark");
      mark.className = "search-hl";
      mark.textContent = text.slice(idx, idx + query.length);
      frag.appendChild(mark);
      last = idx + query.length;
    }

    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode!.replaceChild(frag, textNode);
  }
}

function removeHighlights(root: Element) {
  root.querySelectorAll("mark.search-hl").forEach((mark) => {
    const parent = mark.parentNode!;
    parent.replaceChild(document.createTextNode(mark.textContent!), mark);
    parent.normalize();
  });
}

export default function SearchHighlighter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get("q")?.trim() ?? "";
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main.content");
    if (!main) return;

    removeHighlights(main);

    if (query.length < 2) {
      setMatchCount(0);
      return;
    }

    applyHighlights(main, query);

    const marks = main.querySelectorAll("mark.search-hl");
    setMatchCount(marks.length);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [query]);

  function clearHighlight() {
    router.replace(pathname);
  }

  if (!query || matchCount === 0) return null;

  return (
    <div className="flex items-center justify-between gap-2 mb-5 px-3 py-2 rounded bg-yellow-50 border border-yellow-200 text-sm text-yellow-900">
      <span>
        Výsledky pre <strong>&ldquo;{query}&rdquo;</strong>
        {" "}— {matchCount} {matchCount === 1 ? "zhoda" : matchCount < 5 ? "zhody" : "zhôd"}
      </span>
      <button
        onClick={clearHighlight}
        className="shrink-0 text-yellow-700 hover:text-yellow-900 transition-colors"
        aria-label="Zrušiť zvýraznenie"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
