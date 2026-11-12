import { expertise } from "@/lib/portfolio";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 sm:mb-14">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
            Technical expertise
          </p>
          <h2 className="mt-2 font-display text-display font-medium tracking-tight">
            Tools I deliver with
          </h2>
        </header>

        <dl className="divide-y divide-border border-y border-border">
          {expertise.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <dt className="w-48 shrink-0 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                {group.category}
              </dt>
              <dd className="text-base text-foreground">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
