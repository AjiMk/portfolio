import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { essays, type Essay } from "@/lib/portfolio";

export function WritingSection() {
  const [selected, setSelected] = useState<Essay | null>(null);

  return (
    <section id="notes" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 sm:mb-14">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
            Notes
          </p>
          <h2 className="mt-2 font-display text-display font-medium tracking-tight">
            Notes
          </h2>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <button
                type="button"
                onClick={() => setSelected(essay)}
                className="group flex w-full flex-col gap-2 py-6 text-left sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
                  {essay.date}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="flex items-center gap-2 font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {essay.title}
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-[opacity,transform] duration-[var(--motion-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="text-sm text-muted-foreground">{essay.dek}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected ? (
            <div className="overflow-y-auto px-1 pb-2">
              <DialogHeader>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {selected.date}
                </p>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.dek}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 px-4 pb-5">
                {selected.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
