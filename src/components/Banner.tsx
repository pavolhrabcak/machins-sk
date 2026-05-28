export default function Banner() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 w-full bg-[#003366] border-b border-[#002244]"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center">
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold text-base tracking-wide leading-tight">
            Filatelia Machins SK
          </span>
          <span className="hidden sm:block text-blue-200/70 text-xs leading-tight">
            Slovenský sprievodca svetom Machins
          </span>
        </div>
      </div>
    </header>
  );
}
