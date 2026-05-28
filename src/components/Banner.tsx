export default function Banner() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 w-full bg-[#003366] border-b border-[#002244]"
    >
      <div className="max-w-[1080px] mx-auto px-6 h-14 flex items-center gap-3">
        <span className="text-white font-bold text-base tracking-wide">
          Filatelia Machins SK
        </span>
        <span className="hidden sm:block text-blue-200/70 text-sm">
          Slovenský sprievodca svetom Machins
        </span>
      </div>
    </header>
  );
}
