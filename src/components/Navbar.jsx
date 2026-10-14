import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RegisterButton } from "./RegisterButton";
import { GdgLogo } from "./GdgLogo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Details", href: "#details" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border px-3 pl-4 transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/75 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="HackHeist home"
        >
          <GdgLogo className="h-5 shrink-0" />
          <span className="font-display text-xl tracking-wide text-foreground">
            HACK<span className="text-primary">HEIST</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <RegisterButton size="compact" label="Register" />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-border bg-background/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <RegisterButton
              size="block"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
