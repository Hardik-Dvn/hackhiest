import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GdgLogo } from "../components/GdgLogo";

const stats = [
  { value: "Build", label: "Turn ideas into projects", color: "text-gblue" },
  { value: "Learn", label: "Explore new technologies", color: "text-gred" },
  { value: "Create", label: "Experiment with code", color: "text-gyellow" },
  { value: "Connect", label: "Meet fellow developers", color: "text-ggreen" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="About" title="About HackHeist" />
          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            HackHeist is where curiosity meets creativity. Join a community of passionate
            developers, problem-solvers, and tech enthusiasts to explore new technologies, build
            exciting projects, learn from experts, and turn innovative ideas into reality. Whether
            you’re experimenting with code or building your next big idea, HackHeist is your space
            to <span className="font-semibold text-gblue">create</span>,{" "}
            <span className="font-semibold text-gred">collaborate</span>, and{" "}
            <span className="font-semibold text-ggreen">grow</span>.
          </motion.p>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="heist-glow absolute inset-0" aria-hidden="true" />
          <div className="relative flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>CASE FILE #2026</span>
            <span className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-ggreen" /> ACTIVE
            </span>
          </div>
          <div className="relative my-8 flex justify-center">
            <GdgLogo className="h-16 sm:h-24" />
          </div>
          <div className="relative grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-background/60 p-4">
                <div className={`font-display text-3xl uppercase sm:text-4xl ${s.color}`}>
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
