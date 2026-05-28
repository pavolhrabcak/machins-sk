export default function Footer() {
  return (
    <footer className="w-full bg-[#003366] border-t border-[#002244]">
      <div className="max-w-[1080px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-sm space-y-1">
          <p className="text-white font-medium">Filatelia Machins SK</p>
          <p className="text-blue-200/70">Slovenský sprievodca svetom Machins</p>
          <p className="text-blue-200/70">© 2015–2025 Pali Hrabčák</p>
          <a
            href="https://www.facebook.com/filatelia.machins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-200 hover:text-white transition-colors underline"
          >
            Filatelia Machins SK na Facebooku
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/filatelia-machins/image/upload/v1631482208/img/predecimal_zkklzs.jpg"
          alt="Machin stamp"
          className="hidden sm:block w-16 opacity-70 rounded"
        />
      </div>
    </footer>
  );
}
