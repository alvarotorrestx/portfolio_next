"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

/* -------------------------------------------------------------------------- */

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  text: string;
  bgColor?: string;
  fgColor?: string;
  className?: string;
};

export default function RevealText({
  text,
  bgColor = "#252525",
  fgColor = "#e0eeee",
  className = "text-4xl md:text-6xl",
}: RevealProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const split = new SplitType(containerRef.current, { types: "words" });

    gsap.fromTo(
      split.words,
      { color: bgColor },
      {
        color: fgColor,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end:   "top 20%",
          scrub: true,
        },
      },
    );

    return () => {
      split.revert();
      ScrollTrigger.getById(containerRef.current as any)?.kill();
    };
  }, [bgColor, fgColor]);

  return (
    <p ref={containerRef} className={`font-bebas uppercase leading-tight ${className}`}>
      {text}
    </p>
  );
}

let lenis: Lenis | null = null;

if (typeof window !== "undefined" && !lenis) {
  lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}
