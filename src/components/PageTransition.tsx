"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[999] bg-primary pointer-events-none"
        />
      </AnimatePresence>

      {/* Page content */}
      <div className="z-10 relative">{displayChildren}</div>
    </div>
  );
}
