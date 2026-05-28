"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function LightboxImage({ src, alt, caption, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        title={caption || alt}
        onClick={() => setOpen(true)}
        className={`lb-img${className ? ` ${className}` : ""}`}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt: caption || alt }]}
      />
    </>
  );
}
