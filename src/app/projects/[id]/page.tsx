"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import projects from "@/app/portfolio/Projects";
import { motion } from "framer-motion";
import RevealText from "@/components/RevealText";
import CTALink from "@/components/CTALink";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import IconLink from '@/components/IconLink';
import { PAGE_TRANSITION_DURATION } from '@/utils/Constants';
import PageTransition from "@/components/PageTransition";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-center text-white py-20">Project not found.</div>;


  return (
    <PageTransition>
      <section className="max-w-6xl mx-auto px-4 py-24">
        <button
          onClick={() => router.back()}
          className="cursor-pointer text-lg text-base-content hover:text-primary transition-all inline-flex justify-center items-center mb-6 gap-1"
        >
          <FiArrowLeft /> Back to Projects
        </button>

        <RevealText
          text={project.title}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-start"
          bgColor="#252525"
          fgColor="#e70507"
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-12 items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: PAGE_TRANSITION_DURATION + 0.1 }}
            className="w-full"
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-mono
                         tracking-widest text-primary text-start">
              About Project
            </h2>
            <p className="text-base-content text-sm mb-4 lg:max-w-3/4">{project.description}</p>

            <div className="flex flex-wrap flex-col gap-2 mb-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-mono
                         tracking-widest text-primary text-start">
                Technology Used
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm md:text-base px-2 py-1 border border-accent rounded-lg text-base-content"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {(project.github || project.live) && (
              <div className="flex flex-wrap flex-col mb-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-mono
                         tracking-widest text-primary text-start">
                  Explore
                </h2>
                <div className="flex flex-row flex-wrap gap-2.5 justify-start items-center">
                  {project.github && (
                    <IconLink extLink url={project.github} title="GitHub" icon={<FaGithub className="text-2xl" />} />
                  )}
                  {project.live && (
                    <CTALink extLink url={project.live} text="Visit Website" icon={<FiExternalLink />} />
                  )}
                </div>
              </div>
            )}

            {project.figma?.length > 0 && (
              <div className="flex flex-col justify-center items-center gap-6 mt-6">
                {project.figma.map((p, i) => (
                  <iframe key={i} width="100%" height="600"
                    src={p} className="drop-shadow-[0_0_12px_rgba(255,0,0,1.0)] rounded-lg" allowFullScreen>
                  </iframe>
                ))}
              </div>
            )}

            {project.page_images?.length > 0 && (
              <div className="flex flex-col justify-center items-center gap-6 mt-6">
                {project.page_images.map((img, i) => (
                  <img src={img} key={i} alt={project.title} title={project.title} className="w-full h-auto drop-shadow-[0_0_12px_rgba(255,0,0,1.0)] rounded-lg" />
                ))}
              </div>
            )}

            {project.demo && (
              <div className="flex flex-col justify-center items-center gap-6 mt-6">
                <iframe width="100%" height="500" className="drop-shadow-[0_0_12px_rgba(255,0,0,1.0)] rounded-lg" src={project.demo} title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            )}

          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}
