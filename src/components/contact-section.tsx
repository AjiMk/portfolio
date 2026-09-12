import { type FormEvent, useState } from "react";
import { Check, Copy, FileDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Name is a little short"),
  email: z.string().trim().email("Enter a valid email"),
  intent: z.enum(["project", "role", "other"]),
  message: z.string().trim().min(20, "A little more context helps"),
});

const intents = [
  { value: "project", label: "A project" },
  { value: "role", label: "A role" },
  { value: "other", label: "Something else" },
] as const;

type FormState = {
  name: string;
  email: string;
  intent: "project" | "role" | "other";
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  intent: "project",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof FormState]) {
          next[key as keyof FormState] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    const notes = JSON.parse(localStorage.getItem("ajay-notes") ?? "[]") as unknown[];
    notes.push({ ...result.data, at: new Date().toISOString() });
    localStorage.setItem("ajay-notes", JSON.stringify(notes));
    setSent(true);
    toast.success("Got it. I'll reply over email.");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Could not copy — use the address instead.");
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="mt-2 font-display text-display font-medium tracking-tight">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {profile.availabilityDetail}
          </p>

          <div className="mt-8 flex flex-col gap-1">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 text-foreground"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="inline-flex h-11 items-center gap-2 text-foreground"
            >
              <Phone className="size-4" />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 text-foreground"
            >
              <Github className="size-4" />
              github.com/AjiMk
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 text-foreground"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex h-11 items-center gap-2 text-foreground"
            >
              <FileDown className="size-4" />
              Download CV
            </a>
            <Button
              type="button"
              variant="outline"
              className="mt-3 w-fit"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              <span className="relative size-4">
                <Copy
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                    copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100",
                  )}
                />
                <Check
                  className={cn(
                    "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                    copied ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]",
                  )}
                />
              </span>
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>
        </div>

        {sent ? (
          <div className="flex flex-col justify-center rounded-xl bg-background p-8 shadow-[var(--shadow-border)]">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Sent
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
              Thank you, {form.name.split(" ")[0]}.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Saved on this device. You can also write directly to {profile.email}.
            </p>
            <Button
              className="mt-6 w-fit"
              variant="outline"
              onClick={() => {
                setForm(empty);
                setSent(false);
              }}
            >
              Write another
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="rounded-xl bg-background p-5 shadow-[var(--shadow-border)] sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="text-xs text-muted-foreground">{errors.name}</p> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? (
                  <p className="text-xs text-muted-foreground">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-medium">What is this about?</legend>
              <div className="flex flex-wrap gap-2">
                {intents.map((intent) => (
                  <button
                    key={intent.value}
                    type="button"
                    onClick={() => update("intent", intent.value)}
                    className={cn(
                      "h-11 rounded-full border px-4 text-sm transition-colors duration-[var(--motion-quick)]",
                      form.intent === intent.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-transparent text-foreground hover:bg-card",
                    )}
                    aria-pressed={form.intent === intent.value}
                  >
                    {intent.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="What you need, and by when."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? (
                <p className="text-xs text-muted-foreground">{errors.message}</p>
              ) : null}
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Send note
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
