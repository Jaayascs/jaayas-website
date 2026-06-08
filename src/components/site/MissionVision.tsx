/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function MissionVision() {
  return (
    <section id="mission" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-accent) 60%, var(--iceblue)), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Purpose"
          title={<>Mission &amp; Vision</>}
          subtitle="The principles that shape every solution we craft."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {/* Vision Card */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "var(--iceblue)" }}
            />

            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: "color-mix(in oklab, var(--iceblue) 18%, transparent)",
                border: "1px solid color-mix(in oklab, var(--iceblue) 35%, transparent)",
              }}
            >
              <Compass className="h-5 w-5" style={{ color: "var(--brand-accent)" }} />
            </div>

            <p
              className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--gold)" }}
            >
              Our Vision
            </p>

            <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Empower businesses with technology that creates opportunities.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To empower businesses with technology that creates opportunities, drives growth, and
              inspires progress.
            </p>
          </motion.article>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src="images/missionvision.png"
              alt="Team collaboration and innovation"
              className="h-full min-h-105 w-full object-cover"
            />
          </motion.div>

          {/* Mission Card */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass-tech group relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "var(--iceblue)" }}
            />

            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: "color-mix(in oklab, var(--iceblue) 18%, transparent)",
                border: "1px solid color-mix(in oklab, var(--iceblue) 35%, transparent)",
              }}
            >
              <Target className="h-5 w-5" style={{ color: "var(--brand-accent)" }} />
            </div>

            <p
              className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--gold)" }}
            >
              Our Mission
            </p>

            <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">
              Deliver innovative, reliable, and practical solutions.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver innovative, reliable, and practical technology solutions that simplify
              business operations, solve real-world challenges, and help organizations achieve their
              full potential.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
