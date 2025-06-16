import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type BoxProps = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
};

const variants = {
  hidden: { opacity: 0, x: -25 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export function SkillBox({ Icon, label, index }: BoxProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      custom={index}
      animate={inView ? "visible" : "hidden"}
      className="flex items-center gap-3 p-4 border border-zinc-700
                 rounded-lg transition-transform hover:scale-105
                 hover:border-primary"
    >
      <Icon className="text-primary text-2xl shrink-0" />
      <span className="text-sm font-medium uppercase">{label}</span>
    </motion.div>
  );
}
