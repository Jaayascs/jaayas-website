import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Technology should make work easier, businesses stronger, and possibilities limitless.
          </p>
          <p className="mt-4 font-display text-base italic" style={{ color: "var(--iceblue)" }}>
            Inspired by Possibility.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Mission & Vision", "#mission"],
              ["Technologies", "#tech"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Software Development",
              "Web Applications",
              "Technology Consulting",
              "Process Automation",
              "Digital Transformation",
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 px-6 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© 2026 Jaayas Consultancy Services</p>
      </div>
    </footer>
  );
}
