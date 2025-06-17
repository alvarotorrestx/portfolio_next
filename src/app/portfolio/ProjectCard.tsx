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
      {/* {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
      )} */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm text-base-content mt-1">{summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-accent rounded-full text-base-content"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a href={link}
            rel="noopener noreferrer"
            className="justify-center px-6 py-4 my-4 group inline-flex items-center gap-2 border border-accent rounded-full
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
