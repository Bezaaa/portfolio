import { motion } from "framer-motion";
import type { ReactNode } from "react";


export default function SectionWrapper({ children, id, className = "" }: { children: ReactNode; id: string; className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}