import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { eventConfig } from "../config/event";
import { SectionHeading } from "../components/SectionHeading";

const details = [
  {
    label: "Event",
    value: eventConfig.name,
    icon: Sparkles,
    text: "text-gblue",
    tint: "bg-gblue/10",
  },
  { label: "Time", value: eventConfig.time, icon: Clock, text: "text-gred", tint: "bg-gred/10" },
  {
    label: "Venue",
    value: eventConfig.venue,
    icon: MapPin,
    text: "text-gyellow",
    tint: "bg-gyellow/10",
  },
  {
    label: "Date",
    value: eventConfig.date,
    icon: Calendar,
    text: "text-ggreen",
    tint: "bg-ggreen/10",
  },
];

export function EventDetails() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="details" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Details" title="Mark Your Calendar" />
        <motion.div
          className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -top-20 -right-20 size-56 rounded-full bg-gblue/20 blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {eventConfig.name}
            </h3>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gyellow/10 px-3 py-1 text-xs font-medium text-gyellow">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Date to be announced
            </span>
          </div>
          <dl className="relative mt-6 grid gap-4 sm:grid-cols-2">
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5"
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              >
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${item.tint}`}
                >
                  <item.icon className={`size-5 ${item.text}`} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-base font-semibold break-words text-foreground">
                    {item.value}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
