import { services } from "@/lib/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 sm:mb-14">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
            What I do
          </p>
          <h2 className="mt-2 max-w-4xl font-display text-display font-medium tracking-tight">
            Software that solves practical problems and supports business growth
          </h2>
        </header>

        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.title} className="flex flex-col bg-background p-6 sm:p-8">
              <p className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.body}
              </p>
              <p className="mt-auto pt-5 font-mono text-xs text-muted-foreground">
                {service.evidence}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
