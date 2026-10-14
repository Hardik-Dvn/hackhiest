import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { eventConfig } from "../config/event";
import { RegisterButton } from "../components/RegisterButton";
import { GdgBadge } from "../components/GdgLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ticker = [
  "Think",
  "Build",
  "Break Limits",
  "Hackathon",
  "Workshop",
  "Tech Session",
  "Networking",
  "GDG on Campus MIET",
];

function Vault() {
  const reduce = useReducedMotion();
  const ticks = Array.from({ length: 60 });
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 -z-0 size-[min(130vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-60 sm:size-[900px]"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="size-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="var(--border)" strokeWidth="0.4" />
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.4"
          strokeDasharray="2 3"
        />
        {ticks.map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="6"
            x2="100"
            y2={i % 5 === 0 ? 13 : 9}
            stroke={i % 15 === 0 ? "var(--primary)" : "var(--border)"}
            strokeWidth={i % 5 === 0 ? 0.8 : 0.4}
            transform={`rotate(${i * 6} 100 100)`}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function Hero() {
  const info = [
    { icon: Calendar, label: eventConfig.date },
    { icon: Clock, label: eventConfig.time },
    { icon: MapPin, label: eventConfig.venue },
  ];

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden pt-28">
      <div className="heist-glow absolute inset-0" aria-hidden="true" />
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        aria-hidden="true"
      />
      <Vault />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 text-center"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
      >
        <motion.div variants={fadeUp}>
          <GdgBadge />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase"
        >
          Coming soon · {eventConfig.year}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 font-display leading-[0.85] tracking-tight uppercase"
          style={{ fontSize: "clamp(3.5rem, 16vw, 12rem)" }}
        >
          <span className="block text-foreground">Hack</span>
          <span className="animate-flicker block text-primary drop-shadow-[0_0_40px_var(--glow)]">
            Heist
          </span>
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-4 flex items-center gap-3">
          <span className="h-px w-10 bg-border" />
          <span className="text-stroke font-display text-3xl tracking-widest sm:text-4xl">
            2026
          </span>
          <span className="h-px w-10 bg-border" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          {eventConfig.tagline.split(". ").map((word, i, arr) => (
            <span key={word} className={["text-gblue", "text-gyellow", "text-ggreen"][i]}>
              {word}
              {i < arr.length - 1 ? ". " : ""}
            </span>
          ))}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <RegisterButton size="large" />
          <a
            href="#about"
            className="rounded-full border border-border bg-card/60 px-8 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          {info.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <item.icon className="size-4 text-primary" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div
        aria-hidden="true"
        className="relative z-10 mt-16 -rotate-1 border-y border-border bg-primary py-3 text-primary-foreground"
      >
        <div className="flex w-max animate-marquee gap-8 font-display text-xl tracking-widest uppercase">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((word, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              {word}
              <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
