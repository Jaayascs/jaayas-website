import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Services } from "@/components/site/Services";
import { Approach } from "@/components/site/Approach";
import { Technologies } from "@/components/site/Technologies";
import { WhyJaayas } from "@/components/site/WhyJaayas";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaayas Consultancy Services — Inspired by Possibility" },
      {
        name: "description",
        content:
          "Jaayas Consultancy Services helps businesses turn ideas into practical technology solutions through consulting, software development, and digital innovation.",
      },
      { property: "og:title", content: "Jaayas Consultancy Services — Inspired by Possibility" },
      {
        property: "og:description",
        content:
          "Technology consulting and software solutions that simplify operations, solve real-world challenges, and unlock growth.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Approach />
      <Technologies />
      <WhyJaayas />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
