"use client";

import React, { useRef } from "react";

/** Card com tilt 3D leve e botão "Saiba mais" com <details>. */
export default function TiltCard({
  title,
  excerpt,
  details,
  icon,
}: {
  title: string;
  excerpt: string;
  details: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rx = ((y - midY) / midY) * -6; // graus
    const ry = ((x - midX) / midX) * 6;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative h-full rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition-transform will-change-transform"
    >
      <div className="mb-4 flex items-center gap-3">
        {icon && <div className="text-sky-600">{icon}</div>}
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{excerpt}</p>

      <details className="mt-4 [&_summary]:cursor-pointer">
        <summary className="inline-flex select-none items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700">
          Saiba mais
        </summary>
        <div className="mt-3 rounded-xl border border-sky-100 bg-sky-50/40 p-4 text-sm text-slate-700">
          {details}
        </div>
      </details>

      {/* brilho ao passar o mouse */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
           style={{background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.20), transparent 40%)"}}/>
    </div>
  );
}
