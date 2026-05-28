"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ModalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ModalLink({ href, children }: ModalLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: href }]}
      />
    </>
  );
}
