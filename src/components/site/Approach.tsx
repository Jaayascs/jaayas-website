import { motion } from "framer-motion";
import { Search, Brain, Compass, Code2, Rocket, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "Listen, observe, and learn the business context.",
  },
  {
    icon: Brain,
    title: "Understand",
    body: "Identify what matters most and where to focus.",
  },
  {
    icon: Compass,
    title: "Strategize",
    body: "Shape a clear, practical path forward.",
  },
  {
    icon: Code2,
    title: "Build",
    body: "Engineer reliable, future-ready solutions.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    body: "Ship outcomes that move the business forward.",
  },
  {
    icon: Handshake,
    title: "Support",
    body: "Stay alongside you as needs evolve.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Approach"
          title={<>How We Work</>}
          subtitle="A clear, collaborative process designed to turn possibility into outcome."
        />

        <div className="relative mt-20">
          {/* Floating Particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full blur-[1px]"
              style={{
                width: i % 3 === 0 ? "6px" : "4px",
                height: i % 3 === 0 ? "6px" : "4px",
                top: `${10 + ((i * 17) % 70)}%`,
                left: `${5 + ((i * 13) % 90)}%`,
                background: i % 2 === 0 ? "var(--iceblue)" : "var(--gold)",
                opacity: 0.8,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.15, 0.5, 0.15],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Left Glow Orb */}
          <motion.div
            aria-hidden
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[5%] top-0 -z-10 h-40 w-40 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, var(--iceblue), transparent 70%)",
            }}
          />

          {/* Center Glow Orb */}
          <motion.div
            aria-hidden
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-10 -z-10 h-52 w-52 -translate-x-1/2 rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(circle, var(--gold), transparent 70%)",
            }}
          />

          {/* Right Glow Orb */}
          <motion.div
            aria-hidden
            animate={{
              x: [0, -25, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[5%] top-0 -z-10 h-40 w-40 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, var(--iceblue), transparent 70%)",
            }}
          />

          {/* Timeline Line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--iceblue) 60%, transparent), color-mix(in oklab, var(--gold) 60%, transparent), transparent)",
            }}
          />

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative"
                >
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full glass-strong transition-all duration-300"
                    style={{
                      border:
                        "1px solid color-mix(in oklab, var(--interactive-color) 30%, transparent)",
                      boxShadow: "0 0 30px color-mix(in oklab, var(--iceblue) 20%, transparent)",
                    }}
                  >
                    <Icon className="h-7 w-7" style={{ color: "var(--brand-accent)" }} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-medium">{step.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
