"use client";

import { usePathname } from "next/navigation";
import RelatedPages from "./RelatedPages";

export default function RelatedPagesClient() {
  const pathname = usePathname();
  return <RelatedPages pathname={pathname} />;
}
