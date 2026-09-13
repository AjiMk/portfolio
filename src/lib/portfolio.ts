export const profile = {
  name: "Ajay Kumar M",
  shortName: "Ajay",
  role: "Lead engineer",
  location: "Kochi, India",
  email: "ajimk@proton.me",
  phone: "+91 9895827488",
  phoneHref: "tel:+919895827488",
  github: "https://github.com/AjiMk",
  linkedin: "https://www.linkedin.com/in/ajay-kumar-87a708223/",
  cv: "/ajay-kumar-m.pdf",
  availability: "Air India · Kochi",
  availabilityDetail:
    "Lead engineer at Air India in Kochi. Happy to talk about backend roles, APIs, agentic AI, or security. Email is easiest.",
  lede: "Lead engineer at Air India. Eight years on Node.js and TypeScript — event-driven APIs, and WhatsOnMyAI, an agentic system that turns meal-card PDFs into structured data.",
  now: "Air India. WhatsOnMyAI for F&B, plus passenger and payment event APIs.",
} as const;

export const stats = [
  { value: "8+", label: "Years" },
  { value: "5", label: "Engineers led" },
  { value: "60%", label: "Faster APIs" },
  { value: "50%", label: "Faster incidents" },
] as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#notes", label: "Notes" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export type Project = {
  slug: string;
  index: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  outcomes: { label: string; value: string }[];
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
      "Automated catering menu parsing platform transforming unstructured meal-card PDFs into verified relational data via multi-model LLM workflows and HITL validation.",
    description:
      "WhatsOnMyAI is an enterprise inflight catering management platform engineered for Air India's Food & Beverage team. Inflight meal plans distributed as PDF meal cards were previously entered into databases through manual transcription. The platform automates data ingestion using a multi-model agentic pipeline that parses document layouts, extracts complex menu specifications, and maps them to structured database schema.\n\nFeaturing a high-performance Node.js processing service, PostgreSQL data store, and a modern React management portal, the system embeds Human-in-the-Loop (HITL) validation directly into the publishing lifecycle. F&B domain experts review, adjust, and approve AI extractions before persistence, completely eliminating manual entry errors while guaranteeing catering accuracy.",
    image: "/images/whatsonmyai.jpg",
    imageAlt: "Airline catering kitchen with meal trays and paper cards",
    tags: ["Agentic AI", "HITL", "Node.js", "TypeScript"],
    outcomes: [
      { label: "Team", value: "F&B" },
      { label: "Review", value: "HITL" },
      { label: "Store", value: "Postgres" },
    ],
    featured: true,
  },
  {
    slug: "dataraven",
    index: "02",
    title: "Dataraven",
    year: "2019 — 2024",
    role: "Team · Phases",
    summary:
      "High-throughput automated backup and data archival platform engineered with Node.js, BullMQ, Redis, and worker threads on AWS Kubernetes.",
    description:
      "Dataraven is a scalable enterprise backup and recovery solution built at Phases for platforms like Podio and e-conomic. The system processes high-volume document and workspace backups through distributed asynchronous job queues managed by BullMQ and Redis, deploying dedicated Node.js worker threads to offload CPU-intensive compression and serialization tasks.\n\nArchitected as microservices running on AWS Kubernetes (EKS), garbage collection and stream buffering were meticulously optimized to prevent memory spikes during heavy payload processing. The platform incorporates comprehensive administrative dashboards, real-time telemetry, and automated incident monitoring.",
    image: "/images/dataraven.jpg",
    imageAlt: "Quiet bare-metal server room",
    tags: ["Node.js", "BullMQ", "Kubernetes", "AWS"],
    outcomes: [
      { label: "Queue", value: "BullMQ" },
      { label: "Run", value: "K8s" },
      { label: "Also", value: "e-conomic" },
    ],
  },
  {
    slug: "big-dk",
    index: "03",
    title: "B2B API integrations",
    year: "2019 — 2024",
    role: "Individual contributor · Phases",
    summary:
      "Enterprise B2B integration suite including a custom PSR-7 SAP Concur PHP SDK, automated sales workflows across Azure AD/CMAP, and GCP BigQuery pipelines.",
    description:
      "Engineered a suite of enterprise B2B integrations and system connectors during my tenure at Phases. Author of a custom PSR-7 compliant PHP SDK for SAP Concur, standardizing authentication and API interactions across multiple enterprise products.\n\nArchitected automated sales and identity orchestration for BIG.DK, connecting SAP Concur, CMAP ERP, and Azure AD. Additionally developed automated GCP BigQuery ETL data pipelines from HubSpot for executive reporting in Looker Studio, alongside high-performance REST wrappers interfacing with legacy MS NAV backend environments.",
    image: "/images/integrations.jpg",
    imageAlt: "Server racks in a quiet data center aisle",
    tags: ["SAP Concur", "Azure AD", "HubSpot", "GCP"],
    outcomes: [
      { label: "SDK", value: "Concur" },
      { label: "IdP", value: "Azure AD" },
      { label: "Analytics", value: "BigQuery" },
    ],
  },
  {
    slug: "pfc",
    index: "04",
    title: "PFC",
    year: "2019 — 2024",
    role: "Individual contributor · Phases",
    summary:
      "Custom ERP workflow automations on Podio alongside a cross-platform React Native and GraphQL mobile application for recycling operations.",
    description:
      "Architected operational automation and enterprise management systems for PFC, a major plastics recycling enterprise based in Bengaluru. Designed structured Podio workspace architectures and automated business logic governing stakeholder workflows, employee onboarding, and franchisee operations.\n\nTo extend operational access to field staff, developed a cross-platform mobile application powered by React Native and GraphQL, providing real-time data sync, franchisee management, and operational reporting.",
    image: "/images/pfc.jpg",
    imageAlt: "Plastics recycling workshop with stacked bales and a conveyor",
    tags: ["Podio", "React Native", "GraphQL"],
    outcomes: [
      { label: "Org", value: "Podio" },
      { label: "Mobile", value: "RN" },
      { label: "API", value: "GraphQL" },
    ],
  },
];

export type Essay = {
  slug: string;
  date: string;
  title: string;
  dek: string;
  body: string[];
};

export const essays: Essay[] = [
  {
    slug: "whatsonmyai",
    date: "2026",
    title: "WhatsOnMyAI",
    dek: "Meal cards were PDFs. F&B still reviews the output.",
    body: [
      "Air India's F&B team used to type meal cards into a database. WhatsOnMyAI reads those PDFs with a multi-model agentic workflow, writes structured rows to Postgres, and opens a portal so someone can check the result.",
      "The agent is not unsupervised. Human-in-the-loop is the product. If F&B cannot edit a row, it should not have been written.",
      "The workflow uses structured schemas and human verification, ensuring data accuracy before any menu updates hit downstream systems.",
    ],
  },
  {
    slug: "event-driven-airline-apis",
    date: "2025",
    title: "Event-driven airline APIs",
    dek: "Passenger, payment, and ops events have to land in order.",
    body: [
      "A lot of airline work is events. A passenger change, a payment, an operational notice. Other systems need those in order, and they need them once.",
      "That is the other half of my job at Air India: OCN handling, passenger and payment APIs, retries, logs.",
      "WhatsOnMyAI sits next to that, not on top of a mess. A messy contract just gets copied into the agent.",
    ],
  },
  {
    slug: "lfs-lisp-security",
    date: "Hobby",
    title: "Linux From Scratch, Lisp, security",
    dek: "Side work. I like knowing how the lower layers work.",
    body: [
      "I am going through Linux From Scratch. Compiling a system from source is slow, but it is the only way I have found to actually see what a Linux install is made of.",
      "Lisp is the other thing. I wanted a better grip on functional programming, and on how evaluation works. Not another language for the CV.",
      "Security has been sitting there for a while. The CVE Alert System came out of a 24-hour hackathon. I still like looking at how a service fails when someone is actually trying.",
    ],
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

export const capabilities = [
  {
    title: "Agentic AI",
    body: "WhatsOnMyAI at Air India. Multi-model LLM workflows, HITL review, structured output.",
  },
  {
    title: "APIs & backends",
    body: "REST, GraphQL, NestJS, SDKs. OCN, passenger, payment. Concur, Azure AD, HubSpot.",
  },
  {
    title: "Distributed systems",
    body: "Kafka, RabbitMQ, Redis, BullMQ. High-volume transactional work.",
  },
  {
    title: "Cloud & delivery",
    body: "AWS, GCP, Kubernetes, Docker, Terraform, GitLab CI.",
  },
  {
    title: "Observability",
    body: "ELK, Prometheus, Grafana. Logging that actually shortens incidents.",
  },
  {
    title: "Security",
    body: "OAuth 2.0, CVE monitoring. Hackathon CVE alert system, 2nd place.",
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
  p1: "I'm a lead engineer in Kochi with eight years on backends. At Air India I built WhatsOnMyAI — meal-card PDFs to structured F&B data, with a human in the loop — and I lead event-driven APIs for passenger, payment, and operational events.",
  p2: "I started as a junior at Unieke: a matrimonial product (admin portal, real-time chat, PWA), a static site, and UniekeCare — healthcare for UK care homes. Then five and a half years at Phases. Led a team of five. Dataraven, a Concur SDK, BIG.DK, PFC, HubSpot to BigQuery.",
  p3: "Outside work I am going through Linux From Scratch, learning Lisp, and reading about security. BSc Computer Science, Kerala University, 2014 to 2017.",
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

export const stack = [
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "Kafka",
  "RabbitMQ",
  "Redis",
  "AWS",
  "GCP",
  "Kubernetes",
  "Docker",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "React",
  "GraphQL",
  "React Native",
  "ELK",
];

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
    "Agentic AI",
    "TypeScript",
    "Node.js",
    "event-driven architecture",
    "AWS",
    "Kubernetes",
    "API design",
  ],
};
