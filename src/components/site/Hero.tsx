import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Animated grid backdrop */}
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />

      {/* Glow orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-1/4 -z-10 h-105 w-105 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--iceblue), transparent 60%)",
        }}
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/3 -z-10 h-120 w-120 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--gold), transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1 w-1 rounded-full"
          style={{
            top: `${((i * 53) % 90) + 5}%`,
            left: `${((i * 71) % 90) + 5}%`,
            background: i % 3 === 0 ? "var(--gold)" : "var(--iceblue)",
            opacity: 0.5,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
            Inspired by Possibility
          </span>

          <h1 className="mt-7 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-gradient">Technology That</span>
            <br />
            <span className="text-gradient italic">Creates Possibilities</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We help businesses transform ideas into practical technology solutions through
            consulting, software development, and digital innovation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="btn-glass-ice group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background shadow-(--shadow-glow) transition-all duration-300 hover:-translate-y-0.5 hover:bg-iceblue hover:text-navy"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--brand-accent) 55%, var(--primary)))",
                border: "1px solid var(--iceblue)",
              }}
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="btn-glass-ice group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-iceblue hover:text-iceblue"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
