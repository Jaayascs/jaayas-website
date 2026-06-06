import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${alignCls}`}
    >
      {eyebrow && (
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: "var(--lavender)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
