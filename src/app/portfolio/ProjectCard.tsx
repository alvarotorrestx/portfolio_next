import Link from "@/components/Link";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

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
      <div className="pl-4 space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        <p className="text-base md:text-lg text-base-content mt-1">{summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-sm md:text-base px-2 py-1 border border-accent rounded-lg text-base-content
                          transition-all duration-300 ease-in-out"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <Link url={link} text={"View Project"} icon={<MdArrowForward className="text-lg sm:text-2xl" />} />
        )}
      </div>
    </motion.div>
  );
}
