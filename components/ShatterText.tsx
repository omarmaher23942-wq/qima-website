"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ShatterTextProps {
  text: string;
  className?: string;
  accentClassName?: string;
  accentWords?: number;
  delay?: number;
  wordDelay?: number;
}

export function ShatterText({
  text,
  className = "",
  accentClassName = "",
  accentWords = 0,
  delay = 0,
  wordDelay = 0.16,
}: ShatterTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (reduced || !containerRef.current) return;
    const words = containerRef.current.querySelectorAll<HTMLElement>(
      "[data-word]"
    );

    gsap.set(words, {
      opacity: 0,
      y: 22,
    });

    const tl = gsap.timeline({ delay });
    tl.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: wordDelay,
    });

    return () => {
      tl.kill();
    };
  }, [reduced, delay, wordDelay]);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={className} aria-label={text}>
      {words.map((word, wi) => {
        const isAccent = wi >= words.length - accentWords;
        return (
          <span key={wi} className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]">
            <span
              data-word
              className={`inline-block whitespace-nowrap ${
                isAccent ? accentClassName : ""
              }`}
              style={reduced ? undefined : { willChange: "transform" }}
            >
              {word}
            </span>
            {wi < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
}