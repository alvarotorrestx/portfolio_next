"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

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
    const current = containerRef.current;
    if (!current) return;

    const split = new SplitType(current, { types: "words" });

    if (split.words) {
      split.words.forEach((w) => {
        w.classList.add("reveal-glow");
        (w as HTMLElement).style.setProperty("--glow", "0");
      });
    }

    const tween = gsap.fromTo(
      split.words,
      { color: bgColor, "--glow": 0 },
      {
        color: fgColor,
        "--glow": 1,
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    return () => {
      tween.revert();
      const trigger = ScrollTrigger.getById(current as unknown as string);
      if (trigger) trigger.kill();
    };
  }, [bgColor, fgColor]);

  return (
    <h3 ref={containerRef} className={`select-none font-mono uppercase leading-tight ${className}`}>
      {text}
    </h3>
  );
}