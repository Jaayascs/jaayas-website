import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`} aria-label="Jaayas home">
      <motion.span
        initial={{ rotate: -8, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--lavender) 30%, transparent), color-mix(in oklab, var(--gold) 30%, transparent))",
          border: "1px solid color-mix(in oklab, var(--lavender) 40%, transparent)",
        }}
      >
        <span className="font-display text-xl font-semibold leading-none" style={{ color: "var(--foreground)" }}>
          J
        </span>
        <span
          aria-hidden
          className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--gold)" }}
        />
      </motion.span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight">Jaayas</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Consultancy</span>
      </span>
    </a>
  );
}
