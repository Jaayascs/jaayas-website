import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center ${className}`} aria-label="Jaayas home">
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Light Theme Logo */}
        <img
          src="/logos/jaayas-full-darklogo.png"
          className="block dark:hidden h-12 md:h-14 w-auto"
        />

        {/* Dark Theme Logo */}
        <img
          src="/logos/jaayas-full-lightlogo.png"
          className="hidden dark:block h-12 md:h-14 w-auto"
        />
      </motion.div>
    </a>
  );
}
