import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";
import { achievements } from "../../data/achievements";
import SectionHeader from "../ui/SectionHeader";

export default function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Recognition" title="Achievements" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 relative overflow-hidden group"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors duration-500" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Trophy size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-400">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-medium text-primary mb-1">
                  {ach.event}
                </p>

                {ach.project && (
                  <p className="text-sm text-secondary mb-2">
                    Project: {ach.project}
                  </p>
                )}

                {ach.description && (
                  <p className="text-sm text-secondary/70 mb-3">
                    {ach.description}
                  </p>
                )}

                <div className="flex items-center gap-1 text-xs text-secondary/50">
                  <Calendar size={12} />
                  <span>{ach.year}</span>
                </div>

                {ach.teamMembers && ach.teamMembers.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-secondary/50 mb-1">
                      Team Members
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ach.teamMembers.map((member) => (
                        <span
                          key={member}
                          className="text-xs text-secondary bg-elevated px-2 py-0.5 rounded"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
