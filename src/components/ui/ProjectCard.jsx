import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, index = 0, featured = false }) {
  const {
    title,
    shortDescription,
    category,
    tags,
    image,
    github,
    live,
    award,
    companyWork,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card group overflow-hidden flex flex-col ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {/* Image / Fallback */}
      <div
        className={`relative overflow-hidden ${
          featured
            ? "md:w-2/5 h-52 md:h-auto shrink-0"
            : "h-48"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="project-fallback w-full h-full flex items-center justify-center">
            <div className="relative z-10 text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg font-bold">
                  {title.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-secondary/50 font-medium">
                {category}
              </p>
            </div>
          </div>
        )}

        {/* Award badge */}
        {award && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-amber-500/90 text-black text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            <Trophy size={12} />
            <span>{award.split("–")[0].trim()}</span>
          </div>
        )}

        {/* Company badge */}
        {companyWork && (
          <div className="absolute top-3 left-3 z-10 text-xs font-medium bg-surface/90 text-secondary px-2.5 py-1 rounded-full border border-border backdrop-blur-sm">
            Company Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-5 md:p-6 flex flex-col flex-1 ${featured ? "" : ""}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent-light transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed mb-4 flex-1">
          {shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, featured ? 8 : 5).map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
          {tags.length > (featured ? 8 : 5) && (
            <span className="tech-badge text-secondary/50">
              +{tags.length - (featured ? 8 : 5)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon size={15} />
              <span>Code</span>
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
          {!github && !live && (
            <span className="text-xs text-secondary/40 italic">
              Source not publicly available
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
