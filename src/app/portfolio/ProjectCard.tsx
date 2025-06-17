import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  link?: string;
};

export default function ProjectCard({ title, description, image, techStack, link }: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group border border-accent rounded-xl overflow-hidden hover:bg-secondary hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary group-hover:text-white">{title}</h3>
        <p className="text-sm text-base-content group-hover:text-black mt-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 border border-accent rounded-full text-base-content group-hover:text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-white"
          >
            View Project <FiExternalLink />
          </a>
        )}
      </div>
    </motion.div>
  );
}
