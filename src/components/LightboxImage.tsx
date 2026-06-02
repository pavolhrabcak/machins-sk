"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgStyle?: CSSProperties;
}

export default function LightboxImage({ src, alt, caption, className, imgStyle }: Props) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        title={caption || alt}
        onClick={() => setOpen(true)}
        onLoad={() => setLoaded(true)}
        className={`lb-img transition-opacity duration-300${loaded ? "" : " opacity-0"}${className ? ` ${className}` : ""}`}
        style={imgStyle}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt: caption || alt }]}
      />
    </>
  );
}
