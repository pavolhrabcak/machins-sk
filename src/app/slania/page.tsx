import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog o zaujímavostiach zo sveta Machins.",
  alternates: { canonical: "https://www.filatelia-machins.sk/slania.html" },
};

export default function SlaniaPage() {
  return (
    <SiteLayout>
      <h1>Blog</h1>
      <p className="mb-6">Zaujímavosti zo sveta Machins:</p>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-2 font-semibold">
            Czeslaw Slania
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-3">
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Illum assumenda delectus ipsum?
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-[#003366] text-white rounded hover:bg-[#004488] transition-colors text-sm"
            >
              Čítať viac
            </a>
          </div>
        </div>

        <div className="border border-gray-200 rounded overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-2 font-semibold">
            Underprints
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-3">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-[#003366] text-white rounded hover:bg-[#004488] transition-colors text-sm"
            >
              Čítať viac
            </a>
          </div>
        </div>

        <div className="border border-gray-200 rounded overflow-hidden">
          <div className="bg-[#003366] text-white px-4 py-2 font-semibold">
            EME images
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-3">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-[#003366] text-white rounded hover:bg-[#004488] transition-colors text-sm"
            >
              Čítať viac
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
