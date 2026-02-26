// ================================================================
//  PORTFOLIO CONFIG — edit this file for all content changes.
//  You should never need to touch any other file just to update
//  your name, projects, skills, experience, etc.
// ================================================================

export const config = {

  // ── Identity ─────────────────────────────────────────────────
  name:         "Rizal Solihin",
  initials:     "RS",
  nameShort:    "rizal.sh",            // nav logo
  domain:       "rizalsolihin.my.id",
  location:     "Indonesia 🇮🇩",
  degree:       "Industrial Engineering",
  status:       "open to opportunities",
  currentFocus: "aspiring DevOps / Infra",

  // ── Hero ─────────────────────────────────────────────────────
  hero: {
    eyebrow: "Graduated engineer. Accidental IT person. Now intentional.",

    // First line is white, subsequent lines are amber
    titleLines: ["Took the long way", "around to infra."],

    bio: "Industrial engineering grad who somehow ended up in IT. Touched monitoring, patching, and NOC support across different projects. Now deliberately aiming at DevOps and infrastructure. The breadth was accidental. The depth is on purpose.",

    boldInBio: "deliberately aiming at DevOps and infrastructure.",

    cta1: { label: "See my work",  href: "#projects" },
    cta2: { label: "Get in touch", href: "#contact" },

    // color: "green" | "amber" | "red"
    stats: [
      { label: "degree", value: "industrial eng", color: "amber"  as const },
      { label: "IT exp", value: "~2 yrs",         color: "green"  as const },
      { label: "VPS",    value: "self-managed",   color: "green"  as const },
      { label: "status", value: "open",           color: "green"  as const },
    ],
  },

  // ── Career path card ─────────────────────────────────────────
  careerPath: {
    label: "career_path.log",
    steps: [
      {
        icon:    "🎓",
        role:    "Industrial Engineering",
        company: "university →",
        note:    "graduated → panicked → googled 'what can engineers do in IT'",
        tag:     null as string | null,
      },
      {
        icon: "🖥️",
        role: "Monitoring Team",
        company: "project #1 →",
        note: "first IT job. learned what alerts actually mean.",
        tag: "entry",
      },
      {
        icon: "🩹",
        role: "Patching Team",
        company: "project #2 →",
        note: "updates break things. and also fix things. complicated.",
        tag: "growing",
      },
      {
        icon: "📡",
        role: "NOC Support",
        company: "project #3",
        note: "monitoring at scale. the infra obsession begins.",
        tag: "current",
      },
    ],
    nextLine: "next stop: DevOps / Infrastructure Engineer",
  },

  // ── About ────────────────────────────────────────────────────
  about: {
    headlineLines: ["Took a detour.", "Learned a lot."],

    paragraphs: [
      `I studied industrial engineering — process optimization, systems thinking, supply chains. Then I graduated, couldn't find a "proper" engineering job, and ended up in IT almost by accident. Turns out systems thinking applies everywhere, especially in infrastructure.`,
      `Across three projects I've worked in monitoring, vulnerability patching, and NOC support — three flavors of "keep the lights on." Each one taught me something different about how systems actually behave when real users are hitting them.`,
      `On the side I've been learning DevOps properly: set up a VPS from scratch, built a full observability stack, automated deployments with GitHub Actions. The lab is running. The learning is ongoing.`,
    ],

    honestQuote: `I don't have 5 years of DevOps experience. I have 2 years of watching prod systems break and trying to understand why, plus a homelab I take maybe too seriously. Coming from a non-CS background, I ask different questions — sometimes that's actually useful.`,

    closing: `I'm the kind of person who reads the full error message, checks the second Google result, and documents what broke so it doesn't happen again. Industrial engineering trained me to think in systems. IT is just systems with more alerts.`,
  },

  // ── Skills ───────────────────────────────────────────────────
  // level: "s" = solid/prod  "l" = learning  "f" = familiar
  skills: [
    {
      icon: "🐧", name: "Linux & Server",
      tags: [
        { name: "Ubuntu 24.04",   level: "s" as const },
        { name: "SSH hardening",  level: "s" as const },
        { name: "UFW",            level: "s" as const },
        { name: "systemd",        level: "s" as const },
        { name: "Bash scripting", level: "l" as const },
        { name: "cron / timers",  level: "l" as const },
      ],
    },
    {
      icon: "🐳", name: "Docker & Containers",
      tags: [
        { name: "Docker",          level: "s" as const },
        { name: "Compose v2",      level: "s" as const },
        { name: "bridge networks", level: "s" as const },
        { name: "volumes",         level: "l" as const },
        { name: "Kubernetes",      level: "f" as const },
      ],
    },
    {
      icon: "⚡", name: "CI/CD",
      tags: [
        { name: "GitHub Actions", level: "s" as const },
        { name: "GHCR",           level: "s" as const },
        { name: "auto-deploy",    level: "l" as const },
        { name: "secrets mgmt",   level: "l" as const },
        { name: "Jenkins",        level: "f" as const },
      ],
    },
    {
      icon: "📊", name: "Monitoring & Observability",
      tags: [
        { name: "Grafana",       level: "s" as const },
        { name: "Prometheus",    level: "s" as const },
        { name: "Loki",          level: "s" as const },
        { name: "Promtail",      level: "s" as const },
        { name: "Node Exporter", level: "l" as const },
        { name: "alert rules",   level: "l" as const },
      ],
    },
    {
      icon: "🌐", name: "Networking & Security",
      tags: [
        { name: "reverse proxy",      level: "s" as const },
        { name: "Let's Encrypt",      level: "s" as const },
        { name: "DNS records",        level: "s" as const },
        { name: "Fail2Ban",           level: "l" as const },
        { name: "vulnerability mgmt", level: "l" as const },
        { name: "WireGuard",          level: "f" as const },
      ],
    },
    {
      icon: "💻", name: "Dev & Other",
      tags: [
        { name: "TypeScript",      level: "s" as const },
        { name: "Next.js",         level: "s" as const },
        { name: "Git",             level: "s" as const },
        { name: "Python",          level: "l" as const },
        { name: "REST APIs",       level: "l" as const },
        { name: "ML basics",       level: "f" as const },
        { name: "cybersec basics", level: "f" as const },
      ],
    },
  ],

  // ── Work Experience ──────────────────────────────────────────
  // type: "current" | "past"
  experience: [
    {
      title:   "NOC Support",
      company: "Project #3",
      period:  "current",
      type:    "current" as const,
      desc:    "Network operations center — monitoring infrastructure at scale, incident response, escalation handling. Where the abstract becomes very concrete at 2am.",
      tags:    ["monitoring", "incident response", "escalation", "network ops"],
    },
    {
      title:   "Patching Team",
      company: "Project #2",
      period:  "2024",
      type:    "past" as const,
      desc:    `Vulnerability management and system patching. Learned that "just update it" is never as simple as it sounds — and that change windows exist for good reason.`,
      tags:    ["vulnerability mgmt", "patch management", "change control", "Windows", "Linux"],
    },
    {
      title:   "Monitoring Team",
      company: "Project #1",
      period:  "2023",
      type:    "past" as const,
      desc:    "First IT role out of university. Infrastructure monitoring, alert triage, dashboard building. The job that started the obsession with knowing why systems fail.",
      tags:    ["monitoring", "alerting", "dashboard", "triage"],
    },
    // ✏️  Add more: copy a block above
  ],

  // ── Projects ─────────────────────────────────────────────────
  // status: "live" | "wip" | "idea"
  // links: [{ icon, href }] — use [] for none
  projects: [
    {
      name:   "VPS Lab — Full Setup",
      desc:   "Built a production-style VPS from scratch. SSH hardening, UFW, Docker, Nginx Proxy Manager with auto-SSL, GitHub Actions CI/CD, full observability stack. Real server, real config, real mistakes documented.",
      stack:  ["Ubuntu 24.04", "Docker", "NPM", "Grafana", "Prometheus", "Loki", "GitHub Actions"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://github.com/ripisopol" }],
    },
    {
      name:   "Observability Stack",
      desc:   "Self-hosted monitoring — Prometheus scrapes, Loki aggregates logs, Promtail ships them, Grafana visualizes. All containers internal, accessible only through HTTPS reverse proxy. Overkill for one server. Worth it.",
      stack:  ["Grafana", "Prometheus", "Loki", "Promtail", "Node Exporter", "Docker Compose"],
      status: "live" as const,
      links:  [],
    },
    {
      name:   "This Portfolio",
      desc:   "Push to main → GitHub Actions builds Docker image → pushes to GHCR → SSHes into VPS → pulls and restarts. Zero manual steps. A portfolio that deploys itself felt appropriate.",
      stack:  ["Next.js 15", "TypeScript", "Tailwind", "Docker", "GitHub Actions", "GHCR"],
      status: "live" as const,
      links:  [
        { icon: "↗", href: "https://github.com/ripisopol/portfolio-v2" },
        { icon: "⊕", href: "https://rizalsolihin.my.id" },
      ],
    },
    // ✏️  Add more: copy a block above
  ],

  // ── Contact ──────────────────────────────────────────────────
  contact: {
    headline: "Let's talk.",
    subtext:  "Open to DevOps / infra roles, internships, or just a chat about systems. Also open to being told my Grafana dashboards need work.",
    availability: "Open to Work",
    availDesc:    "Looking for DevOps, infrastructure, or SRE roles. Industrial engineering background, IT ops experience. Based in Indonesia, open to remote.",
    links: [
      { icon: "✉",  label: "ripisopol@gmail.com",   href: "mailto:ripisopol@gmail.com" },
      { icon: "⌥",  label: "github.com/ripisopol",  href: "https://github.com/ripisopol" },
      { icon: "⇗",  label: "linkedin",              href: "https://linkedin.com/in/rizalsolihin" },
    ],
  },
};

export type Config = typeof config;
