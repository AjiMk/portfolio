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
    "Lead engineer at Air India in Kochi. Happy to talk about backend roles, API design, applied AI, or security. Email is easiest.",
  lede: "Lead engineer at Air India, turning slow, manual work into software people can rely on. I created WhatsOnMyAI, the AI platform that reads inflight meal cards and puts the menu in front of passengers as they book. Eight years of building backends with Node.js and TypeScript.",
  now: "Air India. WhatsOnMyAI, meal choice on the booking page, and passenger and payment APIs.",
} as const;

export const stats = [
  { value: "8+", label: "Years building" },
  { value: "5", label: "Engineers led" },
  { value: "60%", label: "Faster APIs" },
  { value: "50%", label: "Faster issue fixes" },
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
    role: "Lead Engineer · Air India",
    summary:
      "Air India's menu platform. It reads inflight meal-card PDFs with AI, has the catering team check the result, and puts those menus on the booking page so passengers can choose their meal.",
    description:
      "Inflight menus reach Air India's Food & Beverage team as PDF meal cards, covering every route, every cabin and every season. Getting them into the system used to mean typing each one in by hand: slow work, and easy to get wrong.\n\nWhatsOnMyAI does that job. Several AI models work together to read each card's layout, pull out the dishes and details, and save them as clean, structured data. Nothing goes live on the AI's word alone: a review portal shows the F&B team exactly what was extracted, and they can correct or approve it in a few clicks.\n\nThe approved menus also feed the Air India booking page, where passengers can see what is served on their flight and pick a meal preference as they book. Because the catering team has checked every item, what a passenger picks is what the kitchen can serve.\n\nI designed and built the platform with Node.js, TypeScript, Python, PostgreSQL, and React.",
    image: "/images/whatsonmyai.jpg",
    imageAlt: "Airline catering kitchen with meal trays and paper cards",
    tags: ["Applied AI", "Human review", "Node.js", "TypeScript"],
    outcomes: [
      { label: "Reads", value: "Meal cards" },
      { label: "Checked by", value: "F&B team" },
      { label: "Serves", value: "Booking page" },
    ],
    featured: true,
  },
  {
    slug: "dataraven",
    index: "02",
    title: "Dataraven",
    year: "2019 — 2024",
    role: "Senior Software Engineer · Phases",
    summary:
      "A backup service that keeps businesses' Podio and e-conomic data safe, running large backup jobs in the background without slowing anything down.",
    description:
      "Teams that run their business on Podio or e-conomic need a copy of their data they can trust. Dataraven makes those backups automatically and keeps them restorable.\n\nThe hard part is volume: some accounts hold huge numbers of files and records. Dataraven splits the work into a queue of background jobs and spreads heavy tasks like compression across separate workers, so large backups finish reliably and memory stays under control. It runs as a set of small services on AWS, with dashboards and alerts so the team sees problems before customers do.\n\nBuilt with Node.js, TypeScript, BullMQ, Redis, Docker, and Kubernetes.",
    image: "/images/dataraven.jpg",
    imageAlt: "Quiet bare-metal server room",
    tags: ["Node.js", "Background jobs", "Kubernetes", "AWS"],
    outcomes: [
      { label: "Protects", value: "Podio" },
      { label: "And", value: "e-conomic" },
      { label: "Runs on", value: "AWS" },
    ],
  },
  {
    slug: "big-dk",
    index: "03",
    title: "Business system integrations",
    year: "2019 — 2024",
    role: "Senior Software Engineer · Phases",
    summary:
      "Connected the business tools companies already use (expense, ERP, sign-in, CRM, and accounting) so data moves between them automatically instead of by copy-paste.",
    description:
      "Most companies run on a handful of systems that don't talk to each other. At Phases I built the connections between them.\n\nFor BIG.DK, I automated the sales and user-account workflow across SAP Concur, their CMAP ERP, and Microsoft Azure AD, so new customers and staff are set up once and kept in sync everywhere. I also wrote a reusable PHP library for SAP Concur that several client projects shared, which made every new Concur integration faster to deliver.\n\nOther work included a pipeline that sends HubSpot sales data to Google BigQuery for leadership dashboards in Looker Studio, QuickBooks integrations, and APIs that let modern apps work with an older Microsoft NAV system.",
    image: "/images/integrations.jpg",
    imageAlt: "Server racks in a quiet data center aisle",
    tags: ["SAP Concur", "Azure AD", "HubSpot", "GCP"],
    outcomes: [
      { label: "Connected", value: "7 systems" },
      { label: "Reusable", value: "Concur SDK" },
      { label: "Reporting", value: "BigQuery" },
    ],
  },
  {
    slug: "pfc",
    index: "04",
    title: "PFC",
    year: "2019 — 2024",
    role: "Senior Software Engineer · Phases",
    summary:
      "Digitised day-to-day operations for a Bengaluru plastics-recycling company: automated workflows for staff and franchisees, plus a mobile app for the team in the field.",
    description:
      "PFC runs a network of recycling franchisees, and much of its coordination lived in spreadsheets and messages. I set up their operations in Podio, covering employee onboarding, franchisee management, and tracking work between stakeholders, with the routine steps automated.\n\nTo reach staff who are rarely at a desk, I built a mobile app for Android and iOS that keeps field data in sync and gives managers live reports.\n\nBuilt with Podio, React Native, and GraphQL.",
    image: "/images/pfc.jpg",
    imageAlt: "Plastics recycling workshop with stacked bales and a conveyor",
    tags: ["Podio", "React Native", "GraphQL"],
    outcomes: [
      { label: "Client", value: "Recycling" },
      { label: "Automated", value: "Onboarding" },
      { label: "Mobile", value: "iOS + Android" },
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
    dek: "The AI does the typing. The F&B team keeps the final say.",
    body: [
      "Air India's F&B team used to type meal cards into a database by hand. WhatsOnMyAI reads those PDFs with several AI models working together, saves the result as structured data, and opens a portal where someone checks it.",
      "The AI is not left on its own. Human review is the product, not an add-on. If the F&B team can't see and fix a row, it shouldn't have been saved.",
      "Every extraction follows a fixed structure and waits for approval, so wrong data never reaches the systems that plan what goes on the aircraft.",
      "The same menus appear on the airindia.com booking page, where travellers choose a meal preference as they book. Because the catering team has checked every item, what a passenger picks is what the kitchen can serve.",
    ],
  },
  {
    slug: "event-driven-airline-apis",
    date: "2025",
    title: "Airline APIs that can't drop a message",
    dek: "Passenger, payment, and operations updates have to arrive in order, and only once.",
    body: [
      "A lot of airline software is really about updates: a passenger changes a booking, a payment clears, a flight's status changes. Other systems need to hear about each one, in the right order, exactly once.",
      "That's the other half of my job at Air India: the APIs for passenger and payment updates and for operational notifications (OCN), with retries and logging so nothing goes missing quietly.",
      "It's also why WhatsOnMyAI works. AI is only as reliable as the data and systems around it. Get those right first, and the AI has something solid to stand on.",
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
      "Designed and built WhatsOnMyAI, which uses AI to turn inflight meal-card PDFs into menu data for the Food & Beverage team, replacing manual data entry.",
      "Added a review portal so catering experts check and approve every AI result before it goes live.",
      "Connected those menus to the airindia.com booking page, so passengers can see what is served and choose a meal preference while booking.",
      "Lead the APIs behind passenger updates, payments, and operational notifications (OCN), built for high volumes and to never lose a message.",
      "Mentor junior and mid-level engineers and run design and code reviews with teams across the airline.",
    ],
  },
  {
    period: "Jun 2019 — Dec 2024",
    org: "Phases India Technology Solutions",
    role: "Senior Software Engineer",
    bullets: [
      "Led a team of five engineers building backend services for SaaS products and enterprise clients.",
      "Made slow APIs about 60% faster by moving heavy work off the request path.",
      "Cut cloud setup time by over 60% by automating infrastructure on AWS with Terraform.",
      "Halved the time to fix production issues by bringing logs and monitoring into one place (ELK).",
      "Built Dataraven, a backup service for Podio and e-conomic, and integrations with SAP Concur, Azure AD, HubSpot, and QuickBooks.",
    ],
  },
  {
    period: "Jan 2018 — May 2019",
    org: "Unieke Software Solutions",
    role: "Junior Software Engineer",
    bullets: [
      "Full-stack developer on consumer web apps with Laravel and Vue.js.",
      "Built a matrimonial platform with real-time chat, profile search, an admin dashboard, secure sign-in, and an installable mobile web app.",
      "Contributed to UniekeCare, software for care homes in the UK.",
    ],
  },
] as const;

export const capabilities = [
  {
    title: "Applied AI",
    body: "AI workflows that do real work, with people reviewing the output. WhatsOnMyAI at Air India.",
  },
  {
    title: "APIs & backends",
    body: "REST and GraphQL APIs, NestJS, client SDKs. Passenger and payment systems at Air India.",
  },
  {
    title: "Reliable systems",
    body: "Queues and event streams (Kafka, RabbitMQ, Redis) for high-volume work that can't be lost.",
  },
  {
    title: "Cloud & delivery",
    body: "AWS, GCP, Kubernetes, Docker, Terraform, GitLab CI. Repeatable setups and safe deploys.",
  },
  {
    title: "Observability",
    body: "ELK, Prometheus, Grafana. Logging and alerts that halve the time to fix problems.",
  },
  {
    title: "Security",
    body: "OAuth 2.0, secure APIs, vulnerability monitoring. Hackathon CVE alert system, 2nd place.",
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
  p1: "I'm a lead engineer in Kochi with eight years building backend systems. At Air India I designed and built WhatsOnMyAI, which turns meal-card PDFs into checked menu data for the catering team and lets passengers choose their meal on the booking page. I also lead the APIs that carry passenger, payment, and operational updates across the airline.",
  p2: "Before that I spent five and a half years at Phases, leading a team of five. We built Dataraven, a backup service for Podio and e-conomic, and connected business systems like SAP Concur, Azure AD, HubSpot, and BigQuery for clients including BIG.DK and PFC. I started at Unieke as a full-stack developer, building a matrimonial platform and working on UniekeCare for UK care homes.",
  p3: "Outside work I am going through Linux From Scratch, learning Lisp, and reading about security. BSc Computer Science, Kerala University, 2014 to 2017.",
};

export const education = {
  degree: "BSc Computer Science",
  school: "Kerala University",
  period: "May 2014 — Mar 2017",
};

export const award = {
  title: "2nd place, Phases AI Hackathon 2024",
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
    "Applied AI",
    "Agentic AI",
    "TypeScript",
    "Node.js",
    "event-driven architecture",
    "AWS",
    "Kubernetes",
    "API design",
  ],
};
