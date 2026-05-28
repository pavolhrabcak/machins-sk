"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
  className?: string;
}

export default function LightboxGallery({ slides, className }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          title={slide.caption || slide.alt}
          onClick={() => setIndex(i)}
          className={`lb-img${className ? ` ${className}` : ""}`}
        />
      ))}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides.map((s) => ({ src: s.src, alt: s.caption || s.alt }))}
      />
    </>
  );
}
