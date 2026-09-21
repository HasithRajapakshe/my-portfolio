import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";
import TechBadge from "../ui/TechBadge";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Career" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-secondary mt-1">
                        <span className="flex items-center gap-1">
                          <Briefcase size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-secondary/60 shrink-0">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  {exp.project && (
                    <p className="text-sm font-medium text-accent mb-3">
                      Project: {exp.project}
                    </p>
                  )}

                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-secondary/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
