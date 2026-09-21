export default function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-secondary hover:text-accent-light hover:border-accent/30 transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  );
}
