import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-base md:text-lg text-secondary leading-relaxed mb-6">
              {profile.aboutSummary}
            </p>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 text-sm font-medium text-primary bg-elevated border border-border rounded-lg hover:border-accent/30 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
