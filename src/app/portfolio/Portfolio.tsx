"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";
import RevealText from "@/components/RevealText";

type GroupedProjects = {
  [category: string]: typeof projects;
};

export default function Portfolio() {
  const grouped: GroupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.type]) acc[project.type] = [];
    acc[project.type].push(project);
    return acc;
  }, {} as GroupedProjects);

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto w-full flex flex-col justify-center items-center">
      <RevealText
        text="Portfolio"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        bgColor="#252525"
        fgColor="#e70507"
      />

      <div className="mt-12 space-y-20 w-full">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-base uppercase tracking-widest text-primary font-mono">
              {category}
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project, i) => {
                const ref = useRef(null);
                const { scrollYProgress } = useScroll({
                  target: ref,
                  offset: ["start 100%", "end 10%"],
                });
                const opacity = useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0]
                );
                const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

                return (
                  <motion.div key={project.title} ref={ref} style={{ opacity, y }}>
                    <ProjectCard {...project} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
