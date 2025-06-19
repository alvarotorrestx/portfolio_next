"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealText from "@/components/RevealText";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";

const SECTION_ORDER = ["Professional Work", "Academic Projects"] as const;

export default function Portfolio() {
  const grouped = projects.reduce<Record<string, typeof projects>>((acc, p) => {
    (acc[p.type] ??= []).push(p);
    return acc;
  }, {});

  return (
    <section className="max-w-[550px] md:max-w-[1600px] py-20 px-4 mx-auto
                        w-full flex flex-col justify-center items-center overflow-hidden">
      <RevealText
        text="Portfolio"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        bgColor="#252525"
        fgColor="#e70507"
      />

      <div className="my-24 space-y-24">
        {SECTION_ORDER.map(section => {
          const list = grouped[section] ?? [];
          if (!list.length) return null;

          return (
            <div key={section} className="space-y-32">
              <h2 className="text-base uppercase tracking-widest text-primary font-mono">
                {section}
              </h2>

              {list
                .slice()
                .reverse()
                .map((proj, idx) => (
                  <ProjectRow
                    key={proj.id}
                    project={proj}
                    index={idx}
                  />
                ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}


function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 90%"],
  });

  const isEven = index % 2 === 0;

  const xImg = useTransform(scrollYProgress, [0, 1],
    isEven ? ["-20%", "0%"] : ["20%", "0%"]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 1],
    isEven ? [-22, 0] : [22, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1],
    isEven ? [-5, 0] : [5, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 items-center justify-center md:flex md:flex-row md:items-start gap-10"
      style={{ flexDirection: isEven ? "row" : "row-reverse" }}
    >
      <motion.img
        will-change="transform"
        src={project.image ?? "/images/placeholder.jpg"}
        alt={project.title}
        style={{ x: xImg, opacity: opacityImg, rotateZ, rotateY }}
        className="w-full md:w-1/2 h-64 md:h-[27rem] object-fill rounded-lg shadow-lg"
      />

      <motion.div style={{ y: yText }} className="w-full md:w-1/2">
        <ProjectCard {...project} />
      </motion.div>
    </motion.div>
  );
}
