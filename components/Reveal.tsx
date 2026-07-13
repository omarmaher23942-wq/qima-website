"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "spring-up";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 28,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  if (direction === "spring-up") {
    const style = reduced
      ? undefined
      : {
          transition: `opacity 0.35s ease ${delay}ms, transform 0.85s cubic-bezier(0.22, 1.8, 0.36, 1) ${delay}ms`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
        };
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    fade: "none",
  };

  const style = reduced
    ? undefined
    : {
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : transforms[direction],
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}