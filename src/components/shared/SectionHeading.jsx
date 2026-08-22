import Reveal from "./Reveal";

const SectionHeading = ({ overline, title, italic, description, align = "left", dark = false }) => {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`} data-testid="section-heading">
      {overline && (
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            {overline}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${
            dark ? "text-cream" : "text-plum"
          }`}
        >
          {title}{" "}
          {italic && (
            <em className="font-accent font-medium italic text-gold">{italic}</em>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={`max-w-xl text-base leading-relaxed tracking-wide sm:text-lg ${
              dark ? "text-cream/70" : "text-mauve"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
