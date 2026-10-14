import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const centered = align === "center";
  return (
    <motion.div
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-primary uppercase">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-5xl leading-none tracking-tight text-foreground uppercase sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
