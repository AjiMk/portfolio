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
    "Lead engineer at Air India in Kochi. Happy to talk about backend roles, APIs, AI agents, or security. Email is easiest.",
  lede: "Lead engineer at Air India. Eight years on Node.js and TypeScript backends — event-driven APIs, cloud systems, and AI agents.",
  now: "Air India. Passenger and payment event APIs, plus AI agents for internal workflows.",
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
    slug: "air-india",
    index: "01",
    title: "Air India platforms",
    year: "2025 —",
    role: "Lead Engineer, Air India",
    summary:
      "Lead for event-driven airline APIs — OCN, passenger, and payment — and AI agents on those same systems.",
    description:
      "I lead backend work at Air India. Passenger events, payment events, operational events, and the APIs around them. TypeScript services, event-driven design, architecture reviews, and mentoring.\n\nI also build AI agents for internal workflows. They call tools, take a next step, and leave a log someone can review. The tools stay scoped so an action is explainable afterwards.\n\nThis is production airline software: high volume, has to stay up, and has to pass a review.",
    image: "/images/air-india.jpg",
    imageAlt: "Operations room with monitors showing flight maps",
    tags: ["TypeScript", "Event-driven", "AI agents"],
    outcomes: [
      { label: "Role", value: "Lead" },
      { label: "Domain", value: "Aviation" },
      { label: "Focus", value: "APIs" },
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
      "Bare-metal backup for Podio, then e-conomic. Node.js, BullMQ, worker threads, and GC tuning so large jobs stay up.",
    description:
      "Dataraven is the backup product we built at Phases. Team work. Bare metal, not a cloud ETL toy. Node.js, BullMQ for the job stream and events. CPU-heavy work goes to worker threads. We also tuned Node's garbage collection so the process could sit on large backups without falling over.\n\nIt started with Podio. We later onboarded e-conomic onto the same path.",
    image: "/images/dataraven.jpg",
    imageAlt: "Quiet bare-metal server room",
    tags: ["Node.js", "BullMQ", "Workers", "Podio"],
    outcomes: [
      { label: "Host", value: "Bare metal" },
      { label: "Queue", value: "BullMQ" },
      { label: "Also", value: "e-conomic" },
    ],
  },
  {
    slug: "big-dk",
    index: "03",
    title: "BIG.DK & Concur SDK",
    year: "2019 — 2024",
    role: "Individual contributor · Phases",
    summary:
      "SAP Concur SDK, then BIG.DK's sales flow: Concur, CMAP, Azure AD, and custom integrations around that.",
    description:
      "I wrote an SDK for SAP Concur so we were not rewriting the client for every project.\n\nFor BIG.DK I wired how they run sales: SAP Concur, CMAP, Azure AD, and a few custom integrations around those. Same person, same years — not a platform team handing me tickets.",
    image: "/images/integrations.jpg",
    imageAlt: "Server racks in a quiet data center aisle",
    tags: ["SAP Concur", "CMAP", "Azure AD", "SDK"],
    outcomes: [
      { label: "Client", value: "BIG.DK" },
      { label: "SDK", value: "Concur" },
      { label: "IdP", value: "Azure AD" },
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
    slug: "ai-agents-at-air-india",
    date: "2026",
    title: "AI agents at Air India",
    dek: "Internal workflows. Not a passenger chatbot.",
    body: [
      "I have been building AI agents at Air India for internal work. They sit on the same APIs as everything else: passenger, payment, operational. An agent can call a tool, draft a next step, and leave a trail someone can read later.",
      "The prompt is the easy part. Scoped tools and review are the rest. If you cannot tell why it did something, it should not have done it.",
      "This only works if the APIs underneath are clear. A messy contract just gets copied into the agent.",
    ],
  },
  {
    slug: "event-driven-airline-apis",
    date: "2025",
    title: "Event-driven airline APIs",
    dek: "Passenger, payment, and ops events have to land in order.",
    body: [
      "A lot of airline work is events. A passenger change, a payment, an operational notice. Other systems need those in order, and they need them once.",
      "That is most of my job at Air India: OCN handling, passenger and payment APIs, retries, logs.",
      "The agents consume those events too. If the stream is late or duplicated, they will act on the wrong picture.",
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
      "Event-driven APIs for OCN, passenger, and payment systems.",
      "AI agents for internal workflows: tool use, review, logging.",
      "Architecture reviews and mentoring.",
    ],
  },
  {
    period: "Jun 2019 — Dec 2024",
    org: "Phases India Technology Solutions",
    role: "Senior Software Engineer",
    bullets: [
      "Team: Dataraven, a bare-metal Podio backup. Node.js, BullMQ, worker threads, GC tuning. Later onboarded e-conomic.",
      "On my own: SAP Concur SDK. BIG.DK sales flow (Concur, CMAP, Azure AD). PFC on Podio, plus a React Native + GraphQL app.",
      "Led a team of five on Node.js and TypeScript services.",
    ],
  },
  {
    period: "Jan 2018 — May 2019",
    org: "Unieke Software Solutions",
    role: "Junior Software Engineer",
    bullets: [
      "Built a matrimonial product with a separate admin portal and real-time chat.",
      "Built a static website.",
      "Contributed to UniekeCare, a healthcare product for care homes in the UK.",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "AI agents",
    body: "Internal workflow agents at Air India. Tool calling, human review, logs.",
  },
  {
    title: "APIs & backends",
    body: "REST, GraphQL, SDKs. SAP Concur, Azure AD, CMAP. Event-driven services.",
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
  p1: "I'm a lead engineer in Kochi with eight years on backends. At Air India I work on distributed systems around passenger, payment, and operational events, and I build AI agents for internal workflows.",
  p2: "I started as a junior at Unieke: a matrimonial product (admin portal, real-time chat), a static site, and UniekeCare — healthcare for UK care homes. Then five and a half years at Phases. Team work on Dataraven. On my own: a SAP Concur SDK, BIG.DK, and PFC including a React Native app.",
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
    "TypeScript",
    "Node.js",
    "event-driven architecture",
    "AI agents",
    "AWS",
    "Kubernetes",
    "API design",
  ],
};
