import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            align="left"
            eyebrow="About Jaayas"
            title={
              <>
                Inspired by <span className="italic" style={{ color: "var(--lavender)" }}>Possibility</span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              At Jaayas Consultancy Services, we believe every challenge presents an opportunity for
              innovation.
            </p>
            <p>
              We partner with organizations to simplify processes, solve business problems, and build
              technology solutions that create meaningful impact.
            </p>
            <p>
              Our focus is on delivering practical, scalable, and future-ready solutions that help
              businesses move forward with confidence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="font-display text-lg italic" style={{ color: "var(--foreground)" }}>
                Technology should make work easier, businesses stronger, and possibilities limitless.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
