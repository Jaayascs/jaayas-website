import { motion } from "framer-motion";
import { Sparkles, Minimize2, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Sparkles,
    title: "Innovation With Purpose",
    body: "Technology should solve real business problems.",
  },
  {
    icon: Minimize2,
    title: "Simplicity First",
    body: "Complex challenges deserve clear solutions.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Thinking",
    body: "Build solutions designed for growth.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    body: "Work closely with clients to achieve results.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment To Quality",
    body: "Deliver solutions with care and professionalism.",
  },
];

export function WhyJaayas() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Jaayas"
          title={<>Principles That Guide Us</>}
          subtitle="The values that shape how we partner, build, and deliver."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass relative overflow-hidden rounded-2xl p-7"
            >
              <div className="flex items-start gap-4">
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                  style={{
                    background: "color-mix(in oklab, var(--gold) 16%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
                  }}
                >
                  <it.icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
