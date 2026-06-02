"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const slide = slides[index];

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  if (!slide) return null;
  return (
    <div className={`relative overflow-hidden${className ? ` ${className}` : ""}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={slide.src}
        alt={slide.alt}
        title={slide.caption || slide.alt}
        onClick={() => openAt(index)}
        onLoad={() => setLoaded(true)}
        className={`lb-img w-full h-full object-contain transition-opacity duration-300${loaded ? "" : " opacity-0"}`}
      />
    </div>
  );
}
