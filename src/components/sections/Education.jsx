import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Academic" title="Education" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 flex items-start gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">
                  {edu.degree}
                </h3>
                <p className="text-sm text-secondary mt-1">
                  {edu.institution}
                </p>
                {edu.period && (
                  <p className="text-xs text-secondary/60 mt-1">{edu.period}</p>
                )}
                {edu.description && (
                  <p className="text-sm text-secondary/70 mt-2">
                    {edu.description}
                  </p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {edu.achievements.map((a, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-secondary/70 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
