import Link from "next/link";

export default function Banner() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 w-full bg-[#003366] border-b border-[#002244]"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center">
        <Link href="/" className="flex flex-col justify-center group">
          <span className="text-white font-bold text-base tracking-wide leading-tight group-hover:text-blue-200 transition-colors">
            Filatelia Machins SK
          </span>
          <span className="hidden sm:block text-blue-200/70 text-xs leading-tight group-hover:text-blue-200/90 transition-colors">
            Slovenský sprievodca svetom Machins
          </span>
        </Link>
      </div>
    </header>
  );
}
