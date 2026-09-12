import { about, award, capabilities, education, experience, openSource, practice, stack } from "@/lib/portfolio";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="mb-10 sm:mb-14">
        <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
          About
        </p>
        <h2 className="mt-2 font-display text-display font-medium tracking-tight">
          Eight years on backends
        </h2>
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-xl bg-card p-2 shadow-[var(--shadow-border)]">
            <img
              src="/images/kochi.jpg"
              alt="Chinese fishing nets on the Kochi waterfront in late afternoon light"
              className="media aspect-4/3 w-full rounded-lg object-cover"
              width={1200}
              height={900}
            />
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Experience
            </h3>
            <ol className="mt-4">
              {experience.map((job, index) => (
                <li key={job.org} className="py-4">
                  {index > 0 ? <Separator className="mb-4" /> : null}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-medium text-foreground">
                      {job.org}
                      <span className="text-muted-foreground"> · {job.role}</span>
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Open source
            </h3>
            <ul className="mt-4 grid gap-4">
              {openSource.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Education & award
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium text-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.school} · {education.period}
                </p>
              </div>
              <Separator />
              <div>
                <p className="font-medium text-foreground">{award.title}</p>
                <p className="text-sm text-muted-foreground">{award.detail}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Outside work
            </h3>
            <ul className="mt-4 grid gap-5">
              {practice.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Capabilities
            </h3>
            <ul className="mt-4 grid gap-5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
