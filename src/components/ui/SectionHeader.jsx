import { motion } from "framer-motion";

export default function SectionHeader({ label, title, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
          {label}
        </p>
      )}
      <h2 id={id} className="text-3xl md:text-4xl font-bold text-primary">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-cyan" />
    </motion.div>
  );
}
