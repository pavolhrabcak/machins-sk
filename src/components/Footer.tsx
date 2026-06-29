"use client";

import Link from "next/link";

const internalLinks = [
  { href: "/parametre",            label: "Parametre" },
  { href: "/nvi",                  label: "NVI (bez nominálu)" },
  { href: "/regionalne",           label: "Regionálne vydania" },
  { href: "/prilezitostne",        label: "Príležitostné vydania" },
  { href: "/rarity",               label: "Rarity" },
  { href: "/zdroje",               label: "Užitočné zdroje" },
  { href: "/kontakt",              label: "Kontakt" },
];

const externalLinks = [
  { href: "https://adminware.ca/machin/", label: "Adminware – Machin Stamps" },
  { href: "https://www.deegam.com/",      label: "Deegam Machin Handbook" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#003366] border-t border-[#002244]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-8">

        <div className="space-y-1 text-sm">
          <p className="text-white font-semibold mb-2">Filatelia Machins</p>
          <p className="text-blue-200/70">Slovenský sprievodca svetom Machins</p>
          <p className="text-blue-200/70 pt-3">© 2015–{year} Pali Hrabčák</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 text-sm">
          <div>
            <p className="text-white font-semibold mb-2">Obsah</p>
            <ul className="space-y-1">
              {internalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">Externé zdroje</p>
            <ul className="space-y-1">
              {externalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
