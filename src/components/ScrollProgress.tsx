"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (progress <= 0 || progress >= 100) return null;

  return (
    <div className="fixed top-14 left-0 right-0 z-50 h-[3px] bg-gray-200 pointer-events-none">
      <div
        className="h-full bg-[#003366] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
