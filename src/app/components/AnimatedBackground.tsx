// src/app/components/AnimatedBackground.tsx
"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let t = 0;
    const el = ref.current!;
    const animate = () => {
      t += 0.0025;
      el.style.background =
        `radial-gradient(1200px 600px at ${50 + Math.sin(t)*10}% ${50 + Math.cos(t*1.2)*8}% , rgba(59,130,246,.20), transparent 60%),
         radial-gradient(900px 500px at ${60 + Math.cos(t*0.8)*12}% ${40 + Math.sin(t*1.1)*10}% , rgba(99,102,241,.15), transparent 60%),
         radial-gradient(800px 500px at ${40 + Math.sin(t*1.4)*8}% ${60 + Math.cos(t*0.9)*12}% , rgba(56,189,248,.12), transparent 60%)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_50%,rgba(59,130,246,.25),transparent_60%)]"
      style={{ filter: "blur(24px)" }}
    />
  );
}
