import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#mission", label: "Mission & Vision" },
  { href: "#tech", label: "Technologies" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <div
        className={`mt-3 flex w-full max-w-7xl items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-tech px-5 py-2.5 shadow-(--shadow-elegant)" : "px-6 py-4"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-iceblue"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--iceblue)" }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="glass-tech grid h-9 w-9 place-items-center rounded-full border border-border/60 text-foreground transition-all duration-300 hover:border-iceblue hover:text-iceblue"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="glass-tech hidden rounded-full px-4 py-2 text-sm font-semibold text-background shadow-(--shadow-glow) transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--interactive-color) 55%, var(--brand-accent)))",
            }}
          >
            Get Started
          </a>

          <button
            className="glass-tech grid h-9 w-9 place-items-center rounded-full border border-border/60 transition-all duration-300 hover:border-iceblue hover:text-iceblue lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute left-4 right-4 top-20 rounded-2xl p-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--iceblue)_12%,transparent)] hover:text-iceblue"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
