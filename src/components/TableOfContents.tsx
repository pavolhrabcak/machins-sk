"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[áàäâ]/g, "a").replace(/[éèëê]/g, "e").replace(/[íìïî]/g, "i")
    .replace(/[óòöô]/g, "o").replace(/[úùüû]/g, "u").replace(/ý/g, "y")
    .replace(/č/g, "c").replace(/š/g, "s").replace(/ž/g, "z")
    .replace(/ň/g, "n").replace(/[ľĺ]/g, "l").replace(/ŕ/g, "r")
    .replace(/ď/g, "d").replace(/ť/g, "t").replace(/ä/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const main = document.querySelector("main.content");
    if (!main) return;

    const els = Array.from(main.querySelectorAll("h2")) as HTMLElement[];
    if (els.length < 3) return;

    const usedIds = new Set<string>();
    els.forEach((el) => {
      if (!el.id) {
        let base = slugify(el.textContent ?? "");
        let id = base;
        let n = 2;
        while (usedIds.has(id)) id = `${base}-${n++}`;
        el.id = id;
      }
      usedIds.add(el.id);
    });

    setHeadings(els.map((el) => ({ id: el.id, text: el.textContent ?? "" })));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  return (
    <nav className="pt-8 px-3 text-xs">
      <p className="font-semibold text-[#003366] mb-2 uppercase tracking-wide text-[11px]">
        Obsah
      </p>
      <ul className="space-y-1 border-l-2 border-gray-200 pl-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block leading-snug transition-colors hover:text-[#003366] ${
                activeId === h.id
                  ? "text-[#003366] font-semibold"
                  : "text-gray-400"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
