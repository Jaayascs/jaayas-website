import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Discover", body: "Listen, observe, and learn the business context." },
  { n: "02", title: "Understand", body: "Identify what matters most and where to focus." },
  { n: "03", title: "Strategize", body: "Shape a clear, practical path forward." },
  { n: "04", title: "Build", body: "Engineer reliable, future-ready solutions." },
  { n: "05", title: "Deliver", body: "Ship outcomes that move the business forward." },
  { n: "06", title: "Support", body: "Stay alongside you as needs evolve." },
];

export function Approach() {
  return (
    <section id="approach" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Approach"
          title={<>How We Work</>}
          subtitle="A clear, collaborative process designed to turn possibility into outcome."
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--lavender) 60%, transparent), color-mix(in oklab, var(--gold) 60%, transparent), transparent)",
            }}
          />

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full glass-strong">
                  <span className="font-display text-base" style={{ color: "var(--lavender)" }}>
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
