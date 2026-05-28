"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";

const navItems = [
  { href: "/", label: "Úvod do Machins" },
  { href: "/parametre", label: "Parametre" },
  { href: "/nvi", label: "NVI (bez nominálu)" },
  { href: "/regionalne", label: "Regionálne vydania" },
  { href: "/prilezitostne", label: "Príležitostné vydania" },
  { href: "/hongkong", label: "Hong Kong" },
  { href: "/pasiky", label: "Pásiky" },
  { href: "/medziharcie", label: "Medzihárčie" },
  { href: "/popis-harku", label: "Nové hárky" },
  { href: "/ochranne-prvky", label: "Ochranné prvky" },
  { href: "/rarity", label: "Rarity" },
  { href: "/pohladnice-a-postery", label: "Pohľadnice a postery" },
  { href: "/zdroje", label: "Užitočné zdroje" },
  { href: "/pojmy", label: "Slovník pojmov" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile nav toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200 text-[#003366]">
        <span className="font-semibold text-sm">Filatelia Machins SK</span>
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Desktop sidebar */}
      <nav className="hidden md:flex flex-col w-60 shrink-0 bg-gray-100 border-r border-gray-200 sticky top-14 self-start">
        <div className="pt-4 pb-8">
          <SearchBox />
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#003366] border-l-4 border-[#003366] pl-4"
                    : "text-gray-600 hover:bg-gray-200 hover:text-[#003366]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <nav className="md:hidden flex flex-col bg-gray-100 border-b border-gray-200">
          <SearchBox />
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-5 py-3 text-sm font-medium border-b border-gray-200 ${
                  isActive
                    ? "bg-white text-[#003366] font-semibold"
                    : "text-gray-600 hover:bg-gray-200 hover:text-[#003366]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
