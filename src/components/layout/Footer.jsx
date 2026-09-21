import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <p>
          &copy; {year} {profile.name}. Built with React &amp; Vite.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary hover:text-primary transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary hover:text-primary transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
