"use client";

import { useEffect, useRef } from "react";

/** Lightweight canvas starfield with gentle parallax drift + twinkle. */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    type Star = { x: number; y: number; z: number; r: number; tw: number; ph: number };
    let stars: Star[] = [];

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = w < 640 ? 0.00008 : 0.00013;
      const count = Math.min(220, Math.floor(w * h * density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        r: Math.random() * 1.1 + 0.25,
        tw: Math.random() * 0.6 + 0.2,
        ph: Math.random() * Math.PI * 2,
      }));
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const drift = reduce ? 0 : (t * 0.006 * (0.3 + s.z));
        const y = (s.y + drift) % (h + 4);
        const twinkle = reduce ? 0.7 : 0.5 + 0.5 * Math.sin(t * 0.001 * s.tw + s.ph);
        const alpha = (0.15 + s.z * 0.55) * twinkle;
        ctx!.beginPath();
        ctx!.arc(s.x, y, s.r * (0.6 + s.z), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${210 + s.z * 45},${215 + s.z * 40},255,${alpha})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    build();
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <canvas ref={ref} className="h-full w-full" />
      {/* Aurora depth wash */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_-5%,rgba(139,123,255,0.14),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_85%_10%,rgba(78,198,245,0.08),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
