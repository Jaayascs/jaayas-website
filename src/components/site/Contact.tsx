import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";

    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";

    if (!String(data.get("message") ?? "").trim())
      next.message = "Tell us a bit about your project.";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      try {
        await emailjs.send(
          "service_i8gkd3h",
          "template_ftfqruh",
          {
            name: data.get("name"),
            email: data.get("email"),
            company: data.get("company") || "Not provided",
            phone: data.get("phone") || "Not provided",
            message: data.get("message"),
          },
          "L9yG6ZSBER3DzSjzq",
        );

        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Unable to send your message at the moment. Please try again.");
      }
    }
  };

  const field =
    "w-full rounded-xl border border-border/70 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-accent)_30%,transparent)]";

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact"
              title={
                <>
                  Let's build what's{" "}
                  <span className="italic" style={{ color: "var(--brand-accent)" }}>
                    possible
                  </span>
                  .
                </>
              }
              subtitle="Share a few details about your goals, challenges, or ideas, and we'll reach out to continue the conversation."
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mt-10 overflow-hidden rounded-4xl border border-white/10"
            >
              <img
                src="images/contact.jpg"
                alt="Technology consultation discussion"
                className="h-65 w-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(2,8,23,0.55), transparent 60%)",
                }}
              />
            </motion.div>
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
                  Company <span className="normal-case opacity-70">(Optional)</span>
                </label>
                <input
                  name="company"
                  type="text"
                  className={field}
                  placeholder="Company name (optional)"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone <span className="normal-case opacity-70">(Optional)</span>
                </label>
                <input name="phone" type="tel" className={field} placeholder="+1 555 000 0000" />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className={field}
                placeholder="Tell us about your idea or challenge..."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="glass-tech mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-(--shadow-glow) transition-all hover:-translate-y-px sm:w-auto"
              style={{
                background:
                  " linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--brand-accent) 55%, var(--primary)))",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {sent && (
              <p className="mt-3 text-xs text-muted-foreground">
                Thank you for reaching out. We'll review your message and get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
