import Link from "next/link";
import { relatedPages } from "@/lib/relatedPages";

interface Props {
  pathname: string;
}

export default function RelatedPages({ pathname }: Props) {
  const pages = relatedPages[pathname];
  if (!pages?.length) return null;

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <p className="text-sm font-semibold text-[#003366] mb-3">Súvisiace stránky</p>
      <div className="flex flex-wrap gap-2">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="inline-block px-3 py-1.5 text-sm rounded border border-[#003366]/40 text-[#003366] hover:bg-[#003366]/10 hover:border-[#003366] transition-colors !no-underline"
          >
            {page.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
