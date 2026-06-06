import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!String(data.get("message") ?? "").trim()) next.message = "Tell us a bit about your project.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 5000);
    }
  };

  const field =
    "w-full rounded-xl border border-border/70 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-[var(--lavender)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--lavender)_30%,transparent)]";

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact"
              title={<>Let's build what's <span className="italic" style={{ color: "var(--lavender)" }}>possible</span>.</>}
              subtitle="Share a few details and we'll get back to you to explore how we can help."
            />
            <a
              href="mailto:info@jaayas.com"
              className="glass mt-10 inline-flex items-center gap-3 rounded-2xl px-5 py-4 transition-all hover:border-[var(--lavender)]"
            >
              <span
                className="grid h-10 w-10 place-items-center rounded-lg"
                style={{
                  background: "color-mix(in oklab, var(--lavender) 18%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--lavender) 35%, transparent)",
                }}
              >
                <Mail className="h-4 w-4" style={{ color: "var(--lavender)" }} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="block text-sm font-medium">info@jaayas.com</span>
              </span>
            </a>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 sm:p-10"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input name="name" type="text" className={field} placeholder="Jane Doe" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input name="email" type="email" className={field} placeholder="you@company.com" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Company
                </label>
                <input name="company" type="text" className={field} placeholder="Company name" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </label>
                <input name="phone" type="tel" className={field} placeholder="+1 555 000 0000" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea name="message" rows={5} className={field} placeholder="Tell us about your idea or challenge…" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:translate-y-[-1px] sm:w-auto"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--lavender) 55%, var(--primary)))",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message ready to send
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
            {sent && (
              <p className="mt-3 text-xs text-muted-foreground">
                Thanks — please email us at info@jaayas.com to continue the conversation.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
