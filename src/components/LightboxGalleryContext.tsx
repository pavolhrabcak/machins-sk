"use client";

import { createContext, useContext, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCtxValue {
  slides: Slide[];
  openAt: (i: number) => void;
}

const GalleryCtx = createContext<GalleryCtxValue>({ slides: [], openAt: () => {} });

export function GalleryProvider({ slides, children }: { slides: Slide[]; children: React.ReactNode }) {
  const [index, setIndex] = useState(-1);
  return (
    <GalleryCtx.Provider value={{ slides, openAt: setIndex }}>
      {children}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides.map((s) => ({ src: s.src, alt: s.caption || s.alt }))}
      />
    </GalleryCtx.Provider>
  );
}

export function GalleryTrigger({ index, className }: { index: number; className?: string }) {
  const { slides, openAt } = useContext(GalleryCtx);
  const slide = slides[index];
  if (!slide) return null;
  return (
    <img
      src={slide.src}
      alt={slide.alt}
      title={slide.caption || slide.alt}
      onClick={() => openAt(index)}
      className={`lb-img${className ? ` ${className}` : ""}`}
    />
  );
}
