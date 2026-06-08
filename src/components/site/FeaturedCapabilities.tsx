/* eslint-disable prettier/prettier */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const capabilities = [
  {
    title: "Automate Operations",
    description:
      "Reduce manual work, improve efficiency, and create smoother workflows through practical automation.",
  },
  {
    title: "Modernize Systems",
    description:
      "Transform outdated processes and legacy systems into scalable, future-ready digital solutions.",
  },
  {
    title: "Build Custom Software",
    description:
      "Design and develop applications tailored to real business needs, not generic templates.",
  },
  {
    title: "Scale Digital Platforms",
    description:
      "Create reliable technology foundations that support long-term growth and evolving business demands.",
  },
  {
    title: "Enable Business Growth",
    description:
      "Use technology as a growth partner by turning challenges into opportunities and ideas into outcomes.",
  },
];

export function FeaturedCapabilities() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section id="capabilities" className="relative overflow-hidden py-28 sm:py-36">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, var(--brand-accent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Capabilities"
          title={<>What We Help Businesses Do</>}
          subtitle="Focused technology capabilities designed to simplify operations, strengthen systems, and support growth."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {capabilities.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all ${
                  active === index
                    ? "border-brand-accent bg-[color-mix(in_oklab,var(--brand-accent)_14%,transparent)]"
                    : "border-border/60 bg-transparent hover:border-iceblue"
                }`}
              >
                <span className="font-display text-xl font-medium">{item.title}</span>
                <ArrowUpRight
                  className={`h-4 w-4 transition-all ${
                    active === index ? "text-gold" : "text-muted-foreground"
                  }`}
                />
              </motion.button>
            ))}
          </div>

          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-tech flex min-h-90 flex-col justify-between rounded-4xl p-8 sm:p-10"
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--gold)" }}
              >
                Capability
              </p>

              <h3 className="mt-5 font-display text-4xl font-medium sm:text-5xl">
                {current.title}
              </h3>

              <p className="glass-techmt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {current.description}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-sm text-muted-foreground">
                Practical solutions. Clear outcomes. Future-ready technology.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
