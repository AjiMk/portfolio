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
  availability: "Air India · Kochi",
  availabilityDetail:
    "I work at Air India in Kochi. If you want to talk about APIs, AI agents, or security, email is the easiest way.",
  lede: "Lead engineer at Air India in Kochi. I work on APIs, event-driven systems, and AI agents.",
  now: "Building AI agents and event-driven APIs at Air India.",
} as const;

export const stats = [
  { value: "8+", label: "Years" },
  { value: "5", label: "Engineers led" },
  { value: "60%", label: "Faster responses" },
  { value: "2nd", label: "AI Hackathon" },
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
      "Event-driven APIs for airline operations: OCN, passenger, and payment systems. Also building AI agents for internal workflows.",
    description:
      "I lead backend work at Air India. Most of it is event-driven: passenger events, payment events, operational events, and the APIs around them. Volume is high, and the systems have to stay up.\n\nI also work on AI agents for internal workflows. They call tools, take a next step, and leave a log someone can review. We keep the tools scoped so an action is explainable afterwards.\n\nThe rest of the week is reviews, mentoring, and the usual lead work.",
    image: "/images/air-india.jpg",
    imageAlt: "Operations room with monitors showing flight maps",
    tags: ["AI agents", "Event-driven", "APIs"],
    outcomes: [
      { label: "Domain", value: "Aviation" },
      { label: "Style", value: "Events" },
      { label: "Now", value: "Agents" },
    ],
    featured: true,
  },
  {
    slug: "podio-backup",
    index: "02",
    title: "Podio Backup Tool",
    year: "2024",
    role: "Design & engineering, Phases",
    summary:
      "Cloud ETL for Podio backups and integrations. Concurrent workers, space monitoring, and ops dashboards.",
    description:
      "I designed and built Podio Backup at Phases. It pulls data out of Podio, runs backups and integrations as jobs, and shows you what is happening. Node.js worker threads and BullMQ on Redis handle the jobs. The services run as Kubernetes microservices on AWS (Lambda, S3, RDS). Internal dashboards cover usage, process logs, and alerts. If a space fails, you get a notification instead of finding out later.",
    image: "/images/podio.jpg",
    imageAlt: "Desk with a monitor showing a backup dashboard",
    tags: ["Node.js", "BullMQ", "AWS", "Kubernetes"],
    outcomes: [
      { label: "Runtime", value: "Workers" },
      { label: "Queue", value: "BullMQ" },
      { label: "Cloud", value: "AWS" },
    ],
  },
  {
    slug: "api-integrations",
    index: "03",
    title: "B2B API integrations",
    year: "2019 — 2024",
    role: "Senior Software Engineer, Phases",
    summary:
      "OAuth integrations with QuickBooks, SAP Concur, Azure AD, and HubSpot. A PHP SDK for Concur, and a HubSpot to BigQuery pipeline.",
    description:
      "Most of my time at Phases was B2B API work. QuickBooks, SAP Concur, Azure AD, HubSpot. I wrote a PSR-7 PHP SDK so we were not rewriting the Concur client for every project. CRM data went from HubSpot into BigQuery for Looker Studio. On older systems like MS NAV I worked with the .NET team to put a REST API in front.",
    image: "/images/integrations.jpg",
    imageAlt: "Server racks in a quiet data center aisle",
    tags: ["REST", "OAuth 2.0", "GCP", "PHP"],
    outcomes: [
      { label: "Systems", value: "4+" },
      { label: "SDK", value: "PSR-7" },
      { label: "Analytics", value: "BigQuery" },
    ],
  },
  {
    slug: "cve-alert",
    index: "04",
    title: "CVE Alert System",
    year: "2024",
    role: "Solo · Phases AI Hackathon, 2nd place",
    summary:
      "24-hour solo build. CVE monitoring, incident reports, and chatbot alerts for the domains and stacks you actually run.",
    description:
      "I built this in 24 hours for the Phases AI Hackathon and came second. You register sites and technologies. It watches CVE feeds, opens an incident when something matches, and pings you through a chatbot. TypeScript and Express, MongoDB, Azure BotBuilder. Small, but it does one job: tell you about the CVEs that apply to you.",
    image: "/images/cve.jpg",
    imageAlt: "Security desk with a monitor of alert graphs",
    tags: ["TypeScript", "MongoDB", "Azure Bot"],
    outcomes: [
      { label: "Award", value: "2nd" },
      { label: "Build", value: "24h" },
      { label: "Team", value: "Solo" },
    ],
    href: "https://github.com/AjiMk/cve-alert-system",
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
      "That is most of my job at Air India: OCN handling, passenger and payment APIs, retries, logs. Not flashy. Necessary.",
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
    detail:
      "OCN event handling, passenger and payment APIs, event-driven architecture, AI agent development, mentoring.",
  },
  {
    period: "Jun 2019 — Dec 2024",
    org: "Phases India Technology Solutions",
    role: "Senior Software Engineer",
    detail:
      "Led a team of five on Node.js and TypeScript services. Kafka, RabbitMQ, Terraform on AWS, GitLab CI/CD, ELK. 60% faster responses, 60% faster provisioning, 50% faster incident resolution.",
  },
  {
    period: "Jan 2018 — May 2019",
    org: "Unieke Software Solutions",
    role: "Junior Software Engineer",
    detail:
      "Full-stack Laravel and Vue. Matrimonial platform with real-time chat, PWA, OAuth 2.0, and admin dashboards.",
  },
] as const;

export const capabilities = [
  {
    title: "AI agents",
    body: "Building agents at Air India for internal workflows. Tools, review, logs.",
  },
  {
    title: "APIs & backends",
    body: "REST, GraphQL, API gateways, DDD, event-driven services.",
  },
  {
    title: "Distributed systems",
    body: "Kafka, RabbitMQ, Redis, BullMQ. High-volume transactional work.",
  },
  {
    title: "Cybersecurity",
    body: "CVE monitoring, OAuth, and a longer interest in how systems get attacked.",
  },
  {
    title: "Cloud",
    body: "AWS, GCP, Kubernetes, Docker, Terraform, GitLab CI.",
  },
  {
    title: "Observability",
    body: "ELK, Prometheus, Grafana.",
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
    body: "The CVE Alert System came out of a hackathon. Still reading and tinkering.",
  },
] as const;

export const about = {
  p1: "I'm a lead engineer in Kochi. I have been writing backends for a bit over eight years. At Air India I work on distributed systems around passenger, payment, and operational events, and I also build AI agents for internal workflows.",
  p2: "Before that I spent five and a half years at Phases. I led a team of five on Node.js and TypeScript services, queues, Terraform on AWS, and logging. Before Phases I did full-stack work with Laravel and Vue at Unieke.",
  p3: "Outside work I am going through Linux From Scratch, learning Lisp, and reading about security. BSc Computer Science from Kerala University, 2014 to 2017.",
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
  "PHP",
  "Kafka",
  "RabbitMQ",
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Lisp",
  "Linux",
  "ELK",
];
