"use client";

import { useParams } from "next/navigation";
import projects from "@/app/portfolio/Projects";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import Link from "@/components/Link";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-center text-white py-20">Project not found.</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <RevealText
        text={project.title}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        bgColor="#252525"
        fgColor="#e70507"
      />

      <div className="mt-12 flex flex-col lg:flex-row gap-12 items-start justify-between">
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ opacity: 0, x: -50, rotateZ: -5 }}
          animate={{ opacity: 1, x: 0, rotateZ: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover max-h-[32rem]"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-base-content text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-sm md:text-base px-2 py-1 border border-accent rounded-lg text-base-content"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <Link url={project.link} text="View Project" icon={<FiExternalLink />} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
