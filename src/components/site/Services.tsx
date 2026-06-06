import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Lightbulb,
  Workflow,
  Rocket,
  LineChart,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    body: "Custom software solutions designed around business goals.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    body: "Modern, scalable, and responsive web platforms.",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    body: "Strategic guidance for digital initiatives and technology decisions.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    body: "Reducing complexity through automation and smarter workflows.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    body: "Helping organizations adapt and thrive in a digital world.",
  },
  {
    icon: LineChart,
    title: "Technology Strategy",
    body: "Aligning technology investments with long-term business growth.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What We Do"
          title={<>Services Built for Real Impact</>}
          subtitle="From consulting to delivery — we partner with you across every stage of the technology journey."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-shadow duration-500 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--lavender), var(--gold), transparent)",
                }}
              />
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: "color-mix(in oklab, var(--lavender) 14%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--lavender) 30%, transparent)",
                }}
              >
                <s.icon className="h-5 w-5" style={{ color: "var(--lavender)" }} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
