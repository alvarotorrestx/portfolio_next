"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  text: string;
  frontClass?: string;
  backClass?: string;
  className?: string;
};

export default function ScrollFillHeading({
  text,
  frontClass,
  backClass,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 15%"],
  });

  const clipWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={`relative flex items-center ${className}`}>
      {/* BACK — always fully visible */}
      <h2
        className={`uppercase whitespace-nowrap select-none pointer-events-none ${backClass}`}
        style={{ WebkitTextStroke: "1px currentColor" }}
      >
        {text}
      </h2>

      {/* FRONT — width grows with scroll */}
      <motion.div style={{ width: clipWidth }} className="absolute inset-0 overflow-hidden">
        <h2
          className={`uppercase whitespace-nowrap select-none pointer-events-none ${frontClass}`}
          style={{ WebkitTextStroke: "1px currentColor" }}
        >
          {text}
        </h2>
      </motion.div>
    </div>
  );
}
