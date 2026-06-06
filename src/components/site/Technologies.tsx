import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "APIs",
  "Cloud Platforms",
  "Databases",
  "Automation Tools",
];

export function Technologies() {
  return (
    <section id="tech" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Technologies"
          title={<>The Stack We Build With</>}
          subtitle="Modern, proven tools chosen for reliability, scalability, and long-term value."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stack.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--lavender)]"
            >
              <span
                className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: i % 2 ? "var(--gold)" : "var(--lavender)" }}
              />
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
