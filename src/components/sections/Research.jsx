import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { research } from "../../data/research";
import SectionHeader from "../ui/SectionHeader";
import TechBadge from "../ui/TechBadge";

export default function Research() {
  if (research.length === 0) return null;

  return (
    <section id="research" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Exploration" title="Research" />

        <div className="space-y-6">
          {research.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <FlaskConical size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-amber-400/80 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 shrink-0">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Research topics */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
                      Key Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 text-xs font-medium text-cyan bg-cyan/5 border border-cyan/15 rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
