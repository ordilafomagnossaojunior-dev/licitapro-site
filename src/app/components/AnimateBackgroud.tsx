"use client";

import React from "react";

/**
 * Fundo leve com gradiente azul e grade sutil animada (zero libs).
 * Use como wrapper da página/hero.
 */
export default function AnimatedBackground({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50 to-white">
      {/* grade sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,132,199,.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* brilho central */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl"
      />
      {children}
    </div>
  );
}
