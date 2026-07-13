"use client";

import { useEffect, useState } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 92 + 3}%`,
    left: `${Math.random() * 94 + 2}%`,
    size: Math.random() < 0.5 ? 2 : 2.5,
    delay: Math.random() * 8,
  }));
}

export function CosmicBackground() {
  const [stars, setStars] = useState<Star[] | null>(null);

  useEffect(() => {
    setStars(generateStars(6));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050d0a",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {stars?.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 32% 28%, #ffffff 0%, #d8e5da 35%, #8fa58a 70%, #2d3e30 100%)",
            boxShadow: "0 0 2px 0.5px rgba(255,255,255,0.4)",
            opacity: 0.55,
            animation: `qima-star-twinkle 10s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes qima-star-twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.75; }
        }
        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}