export const profile = {
  name: "Ajay Kumar M",
  shortName: "Ajay",
  role: "Lead engineer",
  location: "Kochi, India",
  email: "ajaymeledath007@gmail.com",
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
      "Meal-card PDFs in, structured menus out. Agentic LLM workflows and a HITL portal for Air India's F&B team.",
    description:
      "WhatsOnMyAI is the F&B tool I built at Air India. Meal cards used to be PDFs that someone typed into a database. The system reads those cards with a multi-model agentic workflow, writes structured rows, and puts them in front of a person before anything is trusted.\n\nThe portal is React. The pipeline is Node.js and Python, PostgreSQL underneath. Human-in-the-loop is not a slogan here — F&B still edits the output. That is the point. Manual entry went away.\n\nSame job, different systems: I also lead OCN event handling, passenger APIs, and payment event processing. Event-driven, high volume, has to stay up.",
    image: "/images/whatsonmyai.jpg",
    imageAlt: "Airline catering kitchen with meal trays and paper cards",
    tags: ["Agentic AI", "HITL", "Python", "Node.js"],
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
      "Podio backup at scale. Node.js, BullMQ, Redis, worker threads. Kubernetes on AWS. Later, e-conomic on the same path.",
    description:
      "Dataraven is the backup product we built at Phases. Team work. Node.js, BullMQ and Redis for the job stream, worker threads for the CPU-heavy bits. We tuned garbage collection so large backups did not fall over. Services ran as microservices on Kubernetes, AWS behind that. Dashboards for usage, logs, and alerts.\n\nIt started with Podio. We later onboarded e-conomic onto the same path.",
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
      "SAP Concur SDK. BIG.DK sales flow — Concur, CMAP, Azure AD. Also QuickBooks, HubSpot to BigQuery, REST in front of MS NAV.",
    description:
      "I wrote a PHP SDK for SAP Concur (PSR-7) so we were not rewriting the client for every project.\n\nFor BIG.DK I wired how they run sales: SAP Concur, CMAP, Azure AD, and a few custom integrations around those.\n\nSame years: QuickBooks, a HubSpot-to-BigQuery pipeline on GCP for Looker Studio, and REST APIs in front of older systems like MS NAV with the .NET team.",
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
    year: "Phases",
    role: "Individual contributor · Phases",
    summary:
      "Podio for a Bengaluru plastics recycler: stakeholders, employee and franchisee onboarding. React Native + GraphQL app on top.",
    description:
      "PFC is a plastics recycling company in Bengaluru. I set up Podio for them and built the automations around how they actually run: stakeholder management, employee onboarding, franchisee onboarding.\n\nI also built their mobile app. React Native, GraphQL.",
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
      "I also lead the event APIs around this: OCN, passenger, payment. The agents only work if those contracts are clear.",
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
      "Multi-model agentic LLM workflows. Node.js, Python, PostgreSQL, React.",
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
  email: "mailto:ajaymeledath007@gmail.com",
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
