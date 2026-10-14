import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { eventConfig } from "../config/event";

const sizeClasses = {
  compact: "px-5 py-2.5 text-sm",
  default: "px-7 py-3 text-sm",
  large: "px-8 py-4 text-base sm:px-9",
  block: "w-full justify-center px-4 py-3 text-sm",
};

export function RegisterButton({
  size = "default",
  label = "Register Now",
  className = "",
  onClick,
}) {
  const sizing = sizeClasses[size] || sizeClasses.default;

  if (!eventConfig.registrationOpen) {
    return (
      <span
        role="status"
        className={`inline-flex items-center gap-2 rounded-full border border-dashed border-primary/60 bg-primary/10 font-semibold text-primary ${sizing} ${className}`}
      >
        <Clock className="size-4 shrink-0" aria-hidden="true" />
        {size === "compact" ? "Opening Soon" : "Registration Opening Soon"}
      </span>
    );
  }

  return (
    <motion.a
      href={eventConfig.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`${label} for ${eventConfig.name} (opens in a new tab)`}
      className={`group relative inline-flex items-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_40px_var(--glow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${sizing} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </motion.a>
  );
}
