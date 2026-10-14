import { motion } from "framer-motion";
import { eventConfig } from "../config/event";
import { RegisterButton } from "../components/RegisterButton";
import { GdgLogo } from "../components/GdgLogo";

export function FinalCTA() {
  return (
    <section id="register" className="relative overflow-hidden px-4 pt-24 pb-10 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 mx-auto flex max-w-3xl justify-center gap-0 opacity-30 blur-3xl"
      >
        <span className="size-40 rounded-full bg-gblue sm:size-56" />
        <span className="size-40 rounded-full bg-gred sm:size-56" />
        <span className="size-40 rounded-full bg-gyellow sm:size-56" />
        <span className="size-40 rounded-full bg-ggreen sm:size-56" />
      </div>
      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2
          className="font-display tracking-tight text-foreground uppercase"
          style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
        >
          Ready to <span className="text-gradient-google">HackHeist</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Your next big idea starts here. Bring your curiosity, meet your community, and get ready
          to build.
        </p>
        <div className="mt-10">
          <RegisterButton size="large" />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Organized by{" "}
          <span className="font-semibold text-foreground">{eventConfig.organizer}</span>
        </p>
      </motion.div>
      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <span className="flex items-center gap-2 font-display text-base tracking-wide text-foreground">
          <GdgLogo className="h-4" />
          {eventConfig.name}
        </span>
        <span>© 2026 {eventConfig.organizer}. All rights reserved.</span>
      </footer>
    </section>
  );
}
