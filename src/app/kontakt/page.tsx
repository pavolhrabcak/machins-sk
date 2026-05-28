import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktný formulár pre otázky týkajúce sa Machins a obsahu webu filatelia-machins.sk.",
  alternates: { canonical: "https://www.filatelia-machins.sk/kontakt.html" },
};

export default function KontaktPage() {
  return (
    <SiteLayout>
      <h1>Kontaktný formulár</h1>
      <p className="mt-2">
        Ak máte otázky týkajúce sa Machins alebo obsahu tohto webu, neváhajte
        ma kontaktovať:
      </p>

      <div className="mt-6">
        <form
          target="_blank"
          action="https://formsubmit.co/machins.sk@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Vaše meno"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#003366]"
            />
            <input
              type="email"
              name="email"
              placeholder="Váš email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#003366]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Vaša správa"
            rows={10}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#003366] resize-y"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#003366] text-white font-semibold rounded hover:bg-[#004488] transition-colors"
          >
            Odoslať
          </button>
        </form>
      </div>

    </SiteLayout>
  );
}
