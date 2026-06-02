import { Suspense } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./ScrollProgress";
import SearchHighlighter from "./SearchHighlighter";
import RelatedPagesClient from "./RelatedPagesClient";
import TableOfContents from "./TableOfContents";
import ReadingTime from "./ReadingTime";

interface Props {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <ScrollProgress />
      <Banner />
      <div className="flex flex-col md:flex-row flex-1 max-w-[1200px] mx-auto w-full bg-gray-100">
        <Sidebar />
        <main className="flex-1 content px-4 md:px-6 py-6 md:py-8 min-w-0 bg-white">
          <Suspense fallback={null}>
            <SearchHighlighter />
          </Suspense>
          <ReadingTime />
          {children}
          <RelatedPagesClient />
        </main>
        <aside className="hidden xl:block w-44 shrink-0 bg-gray-100 sticky top-14 self-start pb-6">
          <TableOfContents />
        </aside>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
