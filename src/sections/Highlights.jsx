import { motion } from "framer-motion";
import { Code2, Wrench, Mic, Users } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const highlights = [
  {
    title: "Hackathon",
    description: "Team up and turn bold ideas into working prototypes.",
    icon: Code2,
    text: "text-gblue",
    bar: "bg-gblue",
  },
  {
    title: "Workshop",
    description: "Get hands-on with new tools and technologies.",
    icon: Wrench,
    text: "text-gred",
    bar: "bg-gred",
  },
  {
    title: "Tech Session",
    description: "Learn from experts sharing real-world insights.",
    icon: Mic,
    text: "text-gyellow",
    bar: "bg-gyellow",
  },
  {
    title: "Networking",
    description: "Meet developers, designers, and tech enthusiasts.",
    icon: Users,
    text: "text-ggreen",
    bar: "bg-ggreen",
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Highlights" title="Event Highlights" />
        <motion.ul
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {highlights.map((item, i) => (
            <motion.li
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${item.bar}`}
              />
              <div className="flex items-start justify-between">
                <item.icon
                  className={`size-8 transition-transform duration-300 group-hover:-rotate-6 ${item.text}`}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-10 font-display text-3xl tracking-wide text-foreground uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
