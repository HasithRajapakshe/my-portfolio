import { motion } from "framer-motion";
import { Brain, Server, Layout, Smartphone, Wrench, Database } from "lucide-react";
import { skills } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

const categoryIcons = {
  "AI / Machine Learning": Brain,
  Backend: Server,
  Frontend: Layout,
  Mobile: Smartphone,
  "DevOps / Tools": Wrench,
  Database: Database,
};

const categoryColors = {
  "AI / Machine Learning": "from-violet-500/20 to-violet-600/10 border-violet-500/20 text-violet-400",
  Backend: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20 text-emerald-400",
  Frontend: "from-sky-500/20 to-sky-600/10 border-sky-500/20 text-sky-400",
  Mobile: "from-amber-500/20 to-amber-600/10 border-amber-500/20 text-amber-400",
  "DevOps / Tools": "from-rose-500/20 to-rose-600/10 border-rose-500/20 text-rose-400",
  Database: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Expertise" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category] || Wrench;
            const colors = categoryColors[group.category] || "from-gray-500/20 to-gray-600/10 border-gray-500/20 text-gray-400";

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`skill-icon bg-gradient-to-br border ${colors}`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
