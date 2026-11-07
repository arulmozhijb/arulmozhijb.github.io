/**
 * Single source of truth for portfolio content.
 * Every statement below is taken from (or rephrased from) the uploaded resume.
 * Where the resume does not include a detail, a `pending` note is rendered
 * as a visible placeholder instead of inventing information.
 */

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Arul Mozhi JB",
  shortName: "Arul Mozhi",
  initials: "AM",
  role: "MBA Candidate | Product Management",
  headline: ["Aspiring Product Manager", "AI", "Quantum-Inspired Computing"],
  intro:
    "MBA candidate with a BCA background, developing expertise in Product Management, AI, and emerging technologies. I build product concepts through UX and product projects, with a strong interest in AI-powered products and Quantum-Inspired Computing.",
  summary: [
    "I am an MBA candidate with a BCA background, developing expertise in Product Management, Artificial Intelligence, and emerging technologies.",
    "My hands-on experience comes from developing product concepts through UX and product projects, from analyzing existing products and defining opportunities to scoping MVPs and choosing success metrics.",
    "I am especially interested in AI-powered products and Quantum-Inspired Computing, and in how new technologies can become useful, user-centric products.",
  ],
  pillars: [
    "Product Management",
    "AI & Generative AI",
    "Quantum-Inspired Computing",
    "Emerging Technologies",
  ],
  email: "arulmozhijb2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/arulmozhijb",
  linkedinLabel: "linkedin.com/in/arulmozhijb",
  location: "Coimbatore, Tamil Nadu, India",
  resumeUrl: `${BASE}Arul-Mozhi-JB-Resume.pdf`,
  resumeFileName: "Arul-Mozhi-JB-Resume.pdf",
  resumePreview: `${BASE}resume-preview.webp`,
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

export const focusAreas = [
  {
    title: "Product thinking",
    body: "Framing problems as opportunities, then shaping them into features, MVP scope, and success metrics.",
    icon: "compass",
  },
  {
    title: "User-centric design",
    body: "Grounded in UX practice: user research, information architecture, prototyping, and usability testing.",
    icon: "users",
  },
  {
    title: "AI-powered products",
    body: "Exploring how AI, GenAI, and agentic systems can become dependable products for real business workflows.",
    icon: "sparkles",
  },
  {
    title: "Emerging technology",
    body: "Studying Quantum-Inspired Computing and where it could improve reasoning and optimization problems.",
    icon: "atom",
  },
] as const;

export const journey = [
  {
    when: "2021 – 2022",
    title: "Class XII (CBSE)",
    where: "Royal International Senior Secondary School",
  },
  { when: "2022 – 2025", title: "BCA", where: "Kongu Arts and Science College" },
  { when: "May 2025", title: "Google UX Design Certificate", where: "Coursera" },
  {
    when: "2026 – 2028",
    title: "MBA (Expected)",
    where: "Sri Krishna College of Engineering and Technology",
  },
  { when: "In progress", title: "IBM AI Product Manager Certificate", where: "Coursera" },
];

export const education = [
  {
    degree: "MBA",
    full: "Master of Business Administration",
    institution: "Sri Krishna College of Engineering and Technology",
    location: "Coimbatore",
    period: "2026 – 2028",
    status: "Expected",
    current: true,
  },
  {
    degree: "BCA",
    full: "Bachelor of Computer Applications",
    institution: "Kongu Arts and Science College",
    location: "Erode",
    period: "2022 – 2025",
    status: null,
    current: false,
  },
  {
    degree: "Class XII",
    full: "Senior Secondary (CBSE)",
    institution: "Royal International Senior Secondary School",
    location: "Namakkal",
    period: "2021 – 2022",
    status: null,
    current: false,
  },
];

export const skillGroups = [
  {
    title: "Product Management",
    caption: "From discovery to go-to-market",
    icon: "layers",
    skills: [
      "Product Discovery",
      "Product Strategy",
      "Product Requirements",
      "Prioritization",
      "Product Roadmapping",
      "Product Analytics",
      "Agile / Scrum",
      "GTM",
    ],
  },
  {
    title: "AI & Technology",
    caption: "Intelligent and emerging systems",
    icon: "cpu",
    skills: [
      "AI / GenAI",
      "Agentic AI",
      "Prompt Engineering",
      "Quantum Computing Fundamentals",
      "Quantum-Inspired Computing",
    ],
  },
  {
    title: "UX",
    caption: "Designing with users",
    icon: "pen",
    skills: ["User Research", "Information Architecture", "Prototyping", "Usability Testing"],
  },
  {
    title: "Tools & Platforms",
    caption: "Everyday toolkit",
    icon: "wrench",
    skills: ["Figma", "Jira", "Notion", "SQL Fundamentals"],
  },
] as const;

export type CaseSection = {
  id: string;
  title: string;
  body?: string;
  items?: string[];
  itemsLabel?: string;
  /** Shown as a visible placeholder when the resume lacks this detail. */
  pending?: string;
};

export type Project = {
  slug: "zia" | "quantum-enterprise-ai" | "meta-ads";
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  domain: string;
  sections: CaseSection[];
};

const PENDING = "Detail to be added from the full case study.";

export const projects: Project[] = [
  {
    slug: "zia",
    index: "01",
    title: "Zia",
    subtitle: "AI-Powered Business Operations Assistant",
    summary:
      "A mobile AI assistant concept integrating business applications across the Zoho ecosystem, shaped by an analysis of Zia Chat.",
    tags: ["AI Assistant", "Mobile", "Zoho Ecosystem", "MVP Definition"],
    domain: "AI · Business Operations",
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: "Zia is a product concept for a mobile AI assistant that integrates business applications across the Zoho ecosystem, positioned as an assistant for everyday business operations.",
      },
      {
        id: "problem",
        title: "Problem / opportunity",
        body: "The project started with an analysis of Zia Chat, Zoho’s existing AI assistant, to identify product opportunities for supporting business operations from a mobile device.",
        pending:
          "Add the specific user problems and opportunities identified in the Zia Chat analysis.",
      },
      {
        id: "solution",
        title: "Proposed solution",
        body: "A mobile AI assistant concept that brings business applications across the Zoho ecosystem together in a single assistant experience.",
      },
      {
        id: "approach",
        title: "Product approach",
        itemsLabel: "Process followed",
        items: [
          "Analyzed Zia Chat as the existing product baseline",
          "Defined product opportunities from the analysis",
          "Proposed features for the assistant concept",
          "Defined the MVP scope",
          "Defined success metrics to evaluate the concept",
        ],
      },
      {
        id: "features",
        title: "Key features",
        body: "Features were proposed as part of the concept.",
        pending: "Add the list of proposed features.",
      },
      {
        id: "mvp",
        title: "MVP scope",
        body: "An MVP scope was defined to focus the first version of the concept.",
        pending: "Add what is in and out of the MVP scope.",
      },
      {
        id: "metrics",
        title: "Success metrics",
        body: "Success metrics were defined to evaluate the concept. These are proposed metrics, not measured results.",
        pending: "Add the proposed success metrics.",
      },
      {
        id: "learnings",
        title: "Project learnings",
        pending: PENDING,
      },
    ],
  },
  {
    slug: "quantum-enterprise-ai",
    index: "02",
    title: "Quantum-Inspired Enterprise AI",
    subtitle: "Reasoning & evidence verification architecture",
    summary:
      "A quantum-inspired architecture concept to improve reasoning and evidence verification in enterprise AI, defined as a nine-layer product architecture.",
    tags: ["Enterprise AI", "Quantum-Inspired", "Architecture", "Evaluation Plan"],
    domain: "Enterprise AI · QIC",
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: "A product concept that proposes a quantum-inspired architecture to improve reasoning and evidence verification in enterprise AI.",
      },
      {
        id: "problem",
        title: "Problem / opportunity",
        body: "Enterprise AI depends on sound reasoning and verifiable evidence behind its responses. This concept treats AI reliability and response quality as the core opportunity.",
        pending: "Add the specific problem statement and target users.",
      },
      {
        id: "solution",
        title: "Proposed solution",
        body: "A quantum-inspired architecture designed to strengthen reasoning and evidence verification, structured as a nine-layer product architecture.",
      },
      {
        id: "approach",
        title: "Product approach",
        itemsLabel: "Process followed",
        items: [
          "Proposed a quantum-inspired architectural approach",
          "Defined a nine-layer product architecture",
          "Identified potential MVP features",
          "Defined success metrics",
          "Created an evaluation plan to assess AI reliability and response quality",
        ],
      },
      {
        id: "features",
        title: "Key features",
        itemsLabel: "Focus areas",
        items: ["Reasoning", "Evidence verification"],
        pending: "Add the potential MVP features and the role of each of the nine layers.",
      },
      {
        id: "mvp",
        title: "MVP scope",
        body: "Potential MVP features were identified for an initial version of the architecture.",
        pending: "Add the MVP feature list.",
      },
      {
        id: "metrics",
        title: "Success metrics",
        body: "Success metrics and an evaluation plan were defined. These are proposed measures, not measured results.",
        itemsLabel: "Evaluation focus",
        items: ["AI reliability", "Response quality"],
        pending: "Add the specific proposed metrics.",
      },
      {
        id: "learnings",
        title: "Project learnings",
        pending: PENDING,
      },
    ],
  },
  {
    slug: "meta-ads",
    index: "03",
    title: "AI & Quantum-Inspired Optimization for Meta Ads",
    subtitle: "Cross-campaign budget allocation & ad pacing",
    summary:
      "A hybrid AI and Quantum-Inspired Computing approach for cross-campaign budget allocation and ad pacing, with a pilot plan to evaluate feasibility.",
    tags: ["Optimization", "AdTech", "Hybrid AI + QIC", "Pilot Plan"],
    domain: "AdTech · Optimization",
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: "A product concept that proposes a hybrid AI and Quantum-Inspired Computing (QIC) approach to cross-campaign budget allocation and ad pacing for Meta Ads.",
      },
      {
        id: "problem",
        title: "Problem / opportunity",
        body: "Allocating budget across campaigns and pacing ad delivery are optimization problems. This concept explores whether a hybrid AI and QIC approach is feasible for them.",
        pending: "Add the specific problem statement and target users.",
      },
      {
        id: "solution",
        title: "Proposed solution",
        body: "A hybrid approach that combines AI with Quantum-Inspired Computing to support cross-campaign budget allocation and ad pacing decisions.",
      },
      {
        id: "approach",
        title: "Product approach",
        itemsLabel: "Process followed",
        items: [
          "Proposed a hybrid AI and QIC approach",
          "Defined the MVP scope",
          "Defined success metrics",
          "Designed a pilot plan to evaluate optimization feasibility",
        ],
      },
      {
        id: "features",
        title: "Key features",
        itemsLabel: "Focus areas",
        items: ["Cross-campaign budget allocation", "Ad pacing"],
        pending: "Add the list of proposed features.",
      },
      {
        id: "mvp",
        title: "MVP scope",
        body: "An MVP scope was defined, along with a pilot plan to evaluate optimization feasibility.",
        pending: "Add what is in and out of the MVP scope.",
      },
      {
        id: "metrics",
        title: "Success metrics",
        body: "Success metrics were defined for the pilot. These are proposed metrics, not measured results.",
        pending: "Add the proposed success metrics.",
      },
      {
        id: "learnings",
        title: "Project learnings",
        pending: PENDING,
      },
    ],
  },
];

export const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google · Coursera",
    status: "Issued May 2025",
    complete: true,
    credentialId: "3UI0GY2TWY5L",
    url: "https://www.coursera.org/account/accomplishments/specialization/3UI0GY2TWY5L",
  },
  {
    title: "IBM AI Product Manager Professional Certificate",
    issuer: "IBM · Coursera",
    status: "In progress",
    complete: false,
    credentialId: null,
    url: null,
  },
];
