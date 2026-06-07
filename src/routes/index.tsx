import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MissionVision } from "@/components/site/MissionVision";
import { Services } from "@/components/site/Services";
import { Approach } from "@/components/site/Approach";
import { Technologies } from "@/components/site/Technologies";
import { FeaturedCapabilities } from "@/components/site/FeaturedCapabilities";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Showcase } from "@/components/site/showcase";

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
      <Showcase />
      <About />
      <MissionVision />
      <Services />
      <Approach />
      <Technologies />
      <FeaturedCapabilities />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
