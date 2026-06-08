import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";

import { Cloud, Database, Workflow, Settings } from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Django REST",
    icon: SiDjango,
    color: "#44B78B",
  },
  {
    name: "APIs",
    icon: Workflow,
    color: "var(--iceblue)",
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    color: "var(--gold)",
  },
  {
    name: "Databases",
    icon: Database,
    color: "var(--iceblue)",
  },
  {
    name: "Automation Tools",
    icon: Settings,
    color: "var(--gold)",
  },
];

export function Technologies() {
  return (
    <section id="tech" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, var(--iceblue), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Technologies"
          title={<>The Stack We Build With</>}
          subtitle="Modern, proven tools chosen for reliability, scalability, and long-term value."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="glass group rounded-2xl p-5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: "color-mix(in oklab, var(--brand-accent) 12%, transparent)",
                    }}
                  >
                    <Icon
                      className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                  </div>

                  <span className="font-medium text-foreground">{tech.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
