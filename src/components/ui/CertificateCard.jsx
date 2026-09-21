import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

export default function CertificateCard({ cert, index = 0 }) {
  const { title, issuer, date, image, credentialUrl } = cert;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card group p-5 flex flex-col"
    >
      {/* Certificate image or fallback */}
      {image ? (
        <div className="relative overflow-hidden rounded-lg mb-4 h-36">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-lg mb-4 h-36 bg-elevated flex items-center justify-center border border-border">
          <Award className="text-accent/30" size={40} />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-base font-semibold text-primary mb-1 group-hover:text-accent-light transition-colors">
          {title}
        </h3>
        <p className="text-sm text-secondary mb-1">{issuer}</p>
        {date && <p className="text-xs text-secondary/60">{date}</p>}
      </div>

      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors"
        >
          <ExternalLink size={14} />
          <span>View Credential</span>
        </a>
      )}
    </motion.div>
  );
}
