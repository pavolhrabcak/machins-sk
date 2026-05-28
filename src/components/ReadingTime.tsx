"use client";

import { useEffect, useState } from "react";

export default function ReadingTime() {
  const [minutes, setMinutes] = useState<number | null>(null);

  useEffect(() => {
    const main = document.querySelector("main.content");
    if (!main) return;
    const text = main.textContent ?? "";
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    setMinutes(Math.max(1, Math.round(words / 200)));
  }, []);

  if (!minutes) return null;

  return (
    <p className="text-xs text-gray-400 text-right mb-4 -mt-2">
      ~{minutes} min čítania
    </p>
  );
}
