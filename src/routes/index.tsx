import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <WorkSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster
        theme="light"
        position="bottom-center"
        toastOptions={{
          className: "font-sans",
          style: {
            background: "var(--color-background)",
            color: "var(--color-foreground)",
            border: "1px solid var(--color-border)",
          },
        }}
      />
    </div>
  );
}
