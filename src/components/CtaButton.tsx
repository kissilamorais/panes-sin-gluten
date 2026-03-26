interface CtaButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
}

const CtaButton = ({ text = "¡QUIERO MI EBOOK AHORA!", subtext = "Acceso inmediato · Descarga digital", className = "" }: CtaButtonProps) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <a
      href="#precio"
      className="inline-block bg-gradient-gold text-primary-foreground font-body font-black text-lg md:text-xl px-10 py-5 rounded-full shadow-gold hover:scale-105 transition-all duration-300 animate-pulse-glow text-center tracking-wide"
    >
      {text}
    </a>
    {subtext && <p className="text-muted-foreground text-sm">{subtext}</p>}
  </div>
);

export default CtaButton;
