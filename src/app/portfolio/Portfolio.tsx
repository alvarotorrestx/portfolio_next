// src/app/(home)/Portfolio.tsx   (or wherever you keep it)

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/RevealText";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";

export default function Portfolio() {
  return (
    <section className="max-w-[550px] md:max-w-[1600px] py-20 px-4 mx-auto w-full flex flex-col justify-center items-center overflow-hidden">
      {/* SECTION HEADING --------------------------------------------------- */}
      <RevealText
        text="Portfolio"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        bgColor="#252525"
        fgColor="#e70507"
      />

      {/* PROJECTS  ---------------------------------------------------------- */}
      <div className="my-24 space-y-32">
        {projects.toReversed().map((proj, idx) => (
          <ProjectRow key={proj.title} project={proj} index={idx} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* ------------- 1 row (image + copy) ------------------------------------ */
/* ----------------------------------------------------------------------- */
function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // slide-in + fade based on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 90%"],
  });

  // image creeps in from the side
  const xImg = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? ["-20%", "0%"] : ["20%", "0%"]
  );
  const opacityImg = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // text rises up
  const yText = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  /* layout:
        ┌───────────────────────────────┐
        │ img │ text   (even rows)      │
        │ text│ img    (odd  rows)      │
        └───────────────────────────────┘
     swap flex-dir on md+ for staggering
  */
  const isEven = index % 2 === 0;

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-22, 0] : [22, 0]
  );


  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 items-center justify-center md:flex md:flex-row md:items-start gap-10"
      // swap order on larger screens to alternate L / R
      style={{ flexDirection: isEven ? "row" : "row-reverse" }}
    >
      {/* ---------- IMAGE --------------- */}
      <motion.img
        will-change="transform"
        src={project.image ?? "/images/placeholder.jpg"}
        alt={project.title}
        style={{
          x: xImg,
          opacity: opacityImg,
          rotateZ,
          rotateY: useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [-5, 0] : [5, 0]),
          scale: 1,
        }}
        className="w-full md:w-1/2 h-64 md:h-[27rem] object-fill rounded-lg shadow-lg"
      />


      {/* ---------- COPY ---------------- */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [200, 0]),
          // opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), // fades in and out
        }}
        className="w-full md:w-1/2"
      >
        <ProjectCard {...project} />
      </motion.div>

    </motion.div>
  );
}
