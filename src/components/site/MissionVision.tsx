import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  {
    icon: Compass,
    label: "Our Vision",
    title: "Empower businesses with technology that creates opportunities.",
    body:
      "To empower businesses with technology that creates opportunities, drives growth, and inspires progress.",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Deliver innovative, reliable, and practical solutions.",
    body:
      "To deliver innovative, reliable, and practical technology solutions that simplify business operations, solve real-world challenges, and help organizations achieve their full potential.",
  },
];

export function MissionVision() {
  return (
    <section id="mission" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--lavender) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Purpose"
          title={<>Mission &amp; Vision</>}
          subtitle="The principles that shape every solution we craft."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-8 sm:p-10"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--lavender)" }}
              />
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: "color-mix(in oklab, var(--lavender) 18%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--lavender) 35%, transparent)",
                }}
              >
                <c.icon className="h-5 w-5" style={{ color: "var(--lavender)" }} />
              </div>
              <p
                className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--gold)" }}
              >
                {c.label}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">{c.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
