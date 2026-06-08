import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-tech relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <motion.div
            aria-hidden
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--iceblue), transparent 60%)" }}
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
          />

          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Ready to Turn Ideas <br className="hidden sm:block" />
            Into{" "}
            <span className="italic" style={{ color: "var(--brand-accent)" }}>
              Solutions?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Let's discuss how technology can help move your business forward.
          </p>
          <a
            href="#contact"
            className="glass-tech mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-(--shadow-glow) transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--brand-accent) 55%, var(--primary)))",
            }}
          >
            Let's Talk
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
