import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { jsonLd } from "@/lib/portfolio";
import appCss from "../styles.css?url";

const APP_NAME = "Ajay Kumar M — Lead Engineer";
const APP_DESCRIPTION =
  "Lead engineer at Air India. WhatsOnMyAI — agentic meal-card parsing with HITL — plus event-driven APIs. Eight years of Node.js and TypeScript. Kochi, India.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { name: "color-scheme", content: "light dark" },
      { name: "theme-color", content: "#f2eee6" },
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESCRIPTION },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var isDark=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(isDark){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}}catch(e){}})();`,
          }}
        />
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <PreviewHostBridge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
