import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { projects, type Project } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  featured,
  onOpen,
}: {
  project: Project;
  featured?: boolean;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "group flex w-full flex-col text-left",
        featured && "lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-stretch lg:gap-10",
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-xl bg-card p-2 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] group-hover:shadow-[var(--shadow-border-hover)]",
          featured ? "aspect-16/10 lg:aspect-auto lg:min-h-full" : "aspect-16/10",
        )}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="media h-full w-full rounded-lg object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn("flex flex-col justify-center", featured ? "pt-6 lg:pt-0" : "pt-4")}>
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            {project.index} · {project.year}
          </p>
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-[var(--motion-fast)] ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3
          className={cn(
            "mt-2 font-display font-medium tracking-tight text-foreground",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.slug !== featured.slug);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
            Selected work
          </p>
          <h2 className="mt-2 font-display text-display font-medium tracking-tight">
            Backend systems I have shipped
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Air India APIs and agents, Podio ETL on AWS, five years of B2B integrations, a 2nd-place CVE hackathon.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        <ProjectCard project={featured} featured onOpen={setSelected} />
        <div className="grid gap-10 md:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent aria-describedby={undefined}>
          {selected ? (
            <div className="overflow-y-auto">
              <div className="overflow-hidden rounded-lg bg-card">
                <img
                  src={selected.image}
                  alt={selected.imageAlt}
                  className="media aspect-16/9 w-full object-cover"
                />
              </div>
              <DialogHeader>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {selected.index} · {selected.year} · {selected.role}
                </p>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.summary}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5 px-4 pb-5">
                <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {selected.description}
                </p>
                <Separator />
                <dl className="grid grid-cols-3 gap-3">
                  {selected.outcomes.map((outcome) => (
                    <div key={outcome.label} className="rounded-md bg-card px-3 py-3">
                      <dt className="font-mono text-xs text-muted-foreground">{outcome.label}</dt>
                      <dd className="mt-1 font-display text-xl tracking-tight tabular-nums">
                        {outcome.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {selected.href ? (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 text-sm text-foreground"
                  >
                    View on GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
