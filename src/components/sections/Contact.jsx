import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
      description: "Send me a message",
    },
    {
      label: "GitHub",
      value: "HasithRajapakshe",
      href: profile.github,
      Icon: GithubIcon,
      description: "Check out my repositories",
    },
    {
      label: "LinkedIn",
      value: "hasithrajapakshe99",
      href: profile.linkedin,
      Icon: LinkedinIcon,
      description: "Connect with me",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Get in Touch" title="Contact" />

        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg text-secondary leading-relaxed mb-10"
          >
            I&apos;m always open to discussing new opportunities, collaborations,
            or interesting projects. Feel free to reach out through any of the
            channels below.
          </motion.p>

          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-5 flex items-center gap-4 group cursor-pointer"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <link.Icon size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-primary group-hover:text-accent-light transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-secondary truncate">
                    {link.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-secondary/40 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
