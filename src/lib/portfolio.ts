export const profile = {
  name: "Ajay Kumar M",
  shortName: "Ajay",
  role: "Software Engineer",
  location: "Kochi, India",
  email: "ajimk@proton.me",
  phone: "+91 9895827488",
  phoneHref: "tel:+919895827488",
  github: "https://github.com/AjiMk",
  linkedin: "https://www.linkedin.com/in/ajay-kumar-87a708223/",
  cv: "/ajay-kumar-m.pdf",
  availability: "Air India · Kochi",
  headline: "I build reliable web applications and backend systems.",
  lede: "I design and develop practical software solutions, from web applications and APIs to integrations and e-commerce platforms. My focus is on clean architecture, maintainable code, and solving real business problems.",
  focus: ["Web Development", "Backend Engineering", "API Development", "System Integration"],
} as const;

export const stats = [
  { value: "8+", label: "Years" },
  { value: "5", label: "Engineers led" },
  { value: "60%", label: "Faster APIs" },
  { value: "50%", label: "Faster incidents" },
] as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Custom Web Applications",
    body: "Building responsive, user-focused web applications tailored to business requirements, with maintainable architecture and reliable functionality.",
    evidence: "WhatsOnMyAI review portal · PFC mobile app",
  },
  {
    title: "Backend & API Development",
    body: "Designing robust backend services, REST APIs, database structures, and integrations that keep applications connected and efficient.",
    evidence: "Passenger and payment event APIs at Air India · Dataraven",
  },
  {
    title: "E-commerce & CMS Development",
    body: "Developing and extending WordPress and WooCommerce platforms through custom functionality, plugin development, integrations, and performance optimisation.",
    evidence: "20+ WordPress and WooCommerce projects",
  },
  {
    title: "System Integration",
    body: "Connecting applications, APIs, and third-party services to simplify processes and improve how systems work together.",
    evidence: "SAP Concur SDK · Azure AD · HubSpot to BigQuery",
  },
] as const;

export const expertise = [
  { category: "Backend", items: ["Node.js", "TypeScript", "NestJS", "PHP", "Laravel", "Python"] },
  { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "React Native", "Vue.js"] },
  { category: "CMS & E-commerce", items: ["WordPress", "WooCommerce"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { category: "API & Integration", items: ["REST APIs", "GraphQL", "OAuth 2.0", "SDK design"] },
  { category: "Messaging", items: ["Kafka", "RabbitMQ", "BullMQ"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitLab CI"] },
  { category: "Tools & Observability", items: ["Git", "n8n", "ELK", "Prometheus", "Grafana"] },
] as const;

export type Project = {
  slug: string;
  index: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  outcome: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "whatsonmyai",
    index: "01",
    title: "WhatsOnMyAI",
    year: "2025 —",
    role: "Lead Engineer, Air India",
    summary:
      "Turns airline meal-card PDFs into verified, structured menu data, with domain experts approving every extraction before it is published.",
    problem:
      "Air India's Food & Beverage team received inflight meal plans as PDF meal cards and transcribed them into a database by hand: slow, repetitive work where every typing error reached downstream systems.",
    solution:
      "A Node.js processing service runs a multi-model agentic LLM workflow that reads each card's layout, extracts menu specifications against a structured schema, and stores the result in PostgreSQL. A React portal builds human-in-the-loop review into the publishing flow, so F&B specialists check, edit and approve each extraction before it is saved.",
    contribution:
      "Architected and built the platform as lead engineer: the extraction workflow, the data model, the processing service and the review portal.",
    outcome:
      "Manual transcription is replaced by review and approval, and no AI output reaches the database without a person signing it off.",
    image: "/images/whatsonmyai.jpg",
    imageAlt: "Airline catering kitchen with meal trays and paper cards",
    tags: ["Agentic AI", "HITL", "Node.js", "TypeScript", "PostgreSQL", "React"],
    featured: true,
  },
  {
    slug: "dataraven",
    index: "02",
    title: "Dataraven",
    year: "2019 — 2024",
    role: "Team · Phases",
    summary:
      "Automated backup and archival platform for Podio and e-conomic data, built to handle high volumes without memory spikes.",
    problem:
      "Businesses running on Podio and e-conomic needed dependable, automated backups of large volumes of workspace and document data, without jobs exhausting memory or stalling under load.",
    solution:
      "A distributed backup platform: BullMQ and Redis queue the jobs, Node.js worker threads take CPU-heavy compression and serialisation off the main thread, and microservices run on Kubernetes in AWS. Stream buffering and memory use were tuned for large payloads, and operators get dashboards, monitoring, alerting and usage tracking.",
    contribution:
      "Designed and developed the backend as part of the Phases team: job queueing, worker threads, Kubernetes microservices, and the monitoring and dashboards.",
    outcome:
      "Backups run concurrently at scale, with real-time visibility into every job.",
    image: "/images/dataraven.jpg",
    imageAlt: "Quiet bare-metal server room",
    tags: ["Node.js", "BullMQ", "Redis", "Kubernetes", "AWS"],
  },
  {
    slug: "big-dk",
    index: "03",
    title: "B2B API integrations",
    year: "2019 — 2024",
    role: "Individual contributor · Phases",
    summary:
      "Integrations connecting expense, identity, ERP, CRM and legacy systems, including a reusable SAP Concur SDK.",
    problem:
      "Several enterprise clients needed their expense management, identity, ERP, CRM and legacy back-office systems to share data reliably instead of through manual exports.",
    solution:
      "A PSR-7 PHP SDK for SAP Concur that standardised authentication and API calls across client projects; sales and identity automation for BIG.DK across SAP Concur, CMAP ERP and Azure AD; QuickBooks integration; a HubSpot-to-BigQuery pipeline on GCP feeding Looker Studio reports; and REST APIs, built with .NET and backend teams, in front of legacy MS NAV systems.",
    contribution:
      "Individual contributor: wrote the Concur SDK, and designed and built the integrations and data pipelines.",
    outcome:
      "One Concur SDK reused across multiple clients, and integration and reporting work that runs automatically instead of by hand.",
    image: "/images/integrations.jpg",
    imageAlt: "Server racks in a quiet data center aisle",
    tags: ["PHP", "SAP Concur", "Azure AD", "HubSpot", "GCP"],
  },
  {
    slug: "pfc",
    index: "04",
    title: "PFC",
    year: "2019 — 2024",
    role: "Individual contributor · Phases",
    summary:
      "Workflow automation on Podio and a React Native app that gives a recycling company's field staff the same data as the office.",
    problem:
      "PFC, a plastics recycling company in Bengaluru, ran stakeholder workflows, employee onboarding and franchisee operations largely by hand, and its field staff had no mobile access to operational data.",
    solution:
      "Structured Podio workspaces with automated business logic for onboarding, stakeholder and franchisee workflows, plus a cross-platform React Native app on a GraphQL API for data sync, franchisee management and reporting in the field.",
    contribution:
      "Individual contributor: designed the workspace architecture and automations, and built the mobile app.",
    outcome:
      "Core operational workflows run in one automated system, and field staff work from the same data on their phones.",
    image: "/images/pfc.jpg",
    imageAlt: "Plastics recycling workshop with stacked bales and a conveyor",
    tags: ["Podio", "React Native", "GraphQL"],
  },
];

export const experience = [
  {
    period: "Feb 2025 — now",
    org: "Air India",
    role: "Lead Engineer",
    bullets: [
      "WhatsOnMyAI: meal-card PDFs to structured menus for F&B, with a HITL review portal.",
      "Multi-model agentic LLM workflows. Node.js, TypeScript, PostgreSQL, React.",
      "OCN event handling, passenger APIs, payment event processing. Mentoring.",
    ],
  },
  {
    period: "Jun 2019 — Dec 2024",
    org: "Phases India Technology Solutions",
    role: "Senior Software Engineer",
    bullets: [
      "Led a team of five on Node.js and TypeScript services. Kafka, RabbitMQ, Redis.",
      "Dataraven (Podio + e-conomic backups). Concur SDK, BIG.DK, PFC including a React Native app. QuickBooks, HubSpot to BigQuery.",
      "Terraform on AWS (~60% faster provisioning). ELK (~50% faster incident resolution). Worker threads (~60% faster API responses).",
    ],
  },
  {
    period: "Jan 2018 — May 2019",
    org: "Unieke Software Solutions",
    role: "Junior Software Engineer",
    bullets: [
      "Built a matrimonial product: admin portal, real-time chat, PWA, OAuth 2.0.",
      "Built a static website.",
      "Contributed to UniekeCare, a healthcare product for care homes in the UK.",
    ],
  },
] as const;

export const practice = [
  {
    title: "Linux From Scratch",
    body: "Building a Linux system from source so I can see what actually goes into it.",
  },
  {
    title: "Lisp",
    body: "Functional programming, and a better look at how evaluation works.",
  },
  {
    title: "Cybersecurity",
    body: "CVE Alert System came out of a hackathon. Still reading and tinkering.",
  },
] as const;

export const openSource = [
  {
    title: "CVE Alert System",
    href: "https://github.com/AjiMk/cve-alert-system",
    detail: "24-hour hackathon, 2nd place. TypeScript, Express, MongoDB.",
  },
  {
    title: "PM2 Dashboard",
    href: "https://github.com/AjiMk/pm2-dashboard",
    detail: "Self-hosted process dashboard. TypeScript.",
  },
] as const;

export const about = {
  lead: "I'm a software engineer focused on building practical, reliable, and maintainable software.",
  p1: "My experience spans frontend development, backend engineering, web applications, and e-commerce solutions. I enjoy understanding how a business operates, identifying technical challenges, and developing solutions that address them.",
  p2: "I believe good software is not just about writing code. It's about solving the right problems, making sound engineering decisions, and delivering solutions that people can rely on.",
  p3: "Today I'm a lead engineer at Air India in Kochi, building agentic AI workflows and event-driven APIs. Before that I spent five and a half years at Phases leading a team of five on backend services and integrations, and started out as a full-stack developer on Laravel and Vue.js products at Unieke.",
};

export const education = {
  degree: "BSc Computer Science",
  school: "Kerala University",
  period: "May 2014 — Mar 2017",
};

export const award = {
  title: "2nd place — Phases AI Hackathon 2024",
  detail: "CVE Alert System, solo, 24 hours.",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajay Kumar M",
  jobTitle: "Lead Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Air India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  email: "mailto:ajimk@proton.me",
  telephone: "+919895827488",
  url: "https://github.com/AjiMk/portfolio",
  sameAs: [
    "https://github.com/AjiMk",
    "https://www.linkedin.com/in/ajay-kumar-87a708223/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kerala University",
  },
  knowsAbout: [
    "Web application development",
    "Backend engineering",
    "API development",
    "System integration",
    "WordPress",
    "WooCommerce",
    "Agentic AI",
    "TypeScript",
    "Node.js",
    "event-driven architecture",
    "AWS",
    "Kubernetes",
    "API design",
  ],
};
