import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-[#003366] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Stránka nenájdená
        </h2>
        <p className="text-gray-500 mb-8">
          Stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#003366] !text-white !no-underline rounded hover:bg-[#004488] transition-colors font-medium"
        >
          Späť na úvodnú stránku
        </Link>
      </div>
    </SiteLayout>
  );
}
