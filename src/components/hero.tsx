import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/lib/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-start gap-10 px-5 pt-10 pb-16 sm:px-8 sm:pt-16 sm:pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16"
    >
      <div>
        <p className="rise-in font-mono text-eyebrow tracking-[0.18em] text-muted-foreground uppercase">
          {profile.role} · {profile.location}
        </p>
        <h1 className="rise-in rise-in-1 mt-4 font-display text-hero leading-[0.95] font-medium tracking-[-0.035em] text-foreground">
          {profile.name}
        </h1>
        <p className="rise-in rise-in-2 mt-6 max-w-xl text-lede leading-snug text-muted-foreground">
          {profile.lede}
        </p>
        <div className="rise-in rise-in-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" asChild>
            <a href="#work">
              View work
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              Contact
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <div className="flex items-center gap-1 sm:ml-1">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        <p className="rise-in rise-in-4 mt-8 max-w-md border-t border-border pt-5 font-mono text-xs leading-relaxed text-muted-foreground">
          Now · {profile.now}
        </p>
        <dl className="rise-in rise-in-4 mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 font-display text-2xl tracking-tight tabular-nums">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="rise-in rise-in-2 relative mx-auto w-full max-w-sm lg:mx-0 lg:mt-6 lg:justify-self-end">
        <div className="overflow-hidden rounded-xl bg-card p-2">
          <img
            src="/images/ajay.jpg"
            alt="Cartoon illustration of Ajay Kumar M"
            className="media aspect-square w-full rounded-lg object-cover object-top"
            width={1408}
            height={1408}
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>Kochi, Kerala</span>
          <span>Lead engineer</span>
        </figcaption>
      </figure>
    </section>
  );
}
