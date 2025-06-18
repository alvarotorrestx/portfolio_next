import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  summary: string;
  techStack: string[];
  link?: string;
};

export default function ProjectCard({ title, summary, techStack, link }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden transition-all"
    >
      <div className="md:pl-4 space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        <p className="text-base md:text-lg text-base-content mt-1">{summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-sm md:text-base px-2 py-1 border border-accent rounded-full text-base-content
                          transition-all duration-300 ease-in-out 
                          hover:bg-secondary hover:text-base-100 
                          hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a href={link}
            rel="noopener noreferrer"
            className="justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 border border-accent rounded-full
                      transition-all duration-300 ease-in-out text-base font-bold
                      hover:bg-secondary hover:text-base-100 
                      hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
            View Project <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
}
