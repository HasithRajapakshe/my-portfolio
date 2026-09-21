export default function Button({
  children,
  href,
  variant = "primary",
  download,
  onClick,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] active:scale-[0.98]",
    secondary:
      "bg-transparent text-primary border border-border hover:border-accent/40 hover:text-accent-light active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={download} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
