"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const TRANS = `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  y?: number;
  delay?: number;
};

/**
 * Scroll reveal built on IntersectionObserver (robust, no ScrollTrigger).
 * Hidden state is applied in a layout effect before paint, so there is no flash
 * and content is guaranteed to reveal once in view (with a 1.2s safety net).
 */
export function Reveal({ children, className, stagger = false, y = 20, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let targets: HTMLElement[];
    if (stagger) {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      targets = Array.from(el.children) as HTMLElement[];
    } else {
      targets = [el];
    }

    if (reduce) {
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }

    targets.forEach((t, i) => {
      t.style.opacity = "0";
      t.style.transform = `translateY(${y}px)`;
      t.style.transition = TRANS;
      t.style.transitionDelay = `${delay + (stagger ? i * 0.08 : 0)}s`;
      t.style.willChange = "opacity, transform";
    });

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      // Drop the promoted layer once the transition finishes.
      window.setTimeout(() => {
        targets.forEach((t) => {
          t.style.willChange = "auto";
        });
      }, 900);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);

    const timer = window.setTimeout(reveal, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [stagger, y, delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/** Hero entrance — plays once on mount (GSAP, no ScrollTrigger). */
export function HeroReveal({
  children,
  className,
  selector = "[data-hero]",
}: {
  children: React.ReactNode;
  className?: string;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      gsap.fromTo(
        items,
        { opacity: 0, y: 24, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.05,
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
