// ================================================================
//  PORTFOLIO CONFIG — edit this file for all content changes.
//  You should never need to touch any other file just to update
//  your name, projects, skills, experience, etc.
// ================================================================

export const config = {

  // ── Identity ─────────────────────────────────────────────────
  name:         "Rizal Solihin",
  initials:     "RS",
  nameShort:    "rizal.sh",
  domain:       "rizalsolihin.my.id",
  location:     "Central Jakarta, Indonesia 🇮🇩",
  degree:       "Industrial Engineering — Telkom University",
  status:       "open to opportunities",
  currentFocus: "System Ops → aspiring DevOps / Infra",

  // ── Hero ─────────────────────────────────────────────────────
  hero: {
    eyebrow: "Industrial engineer. Accidental IT person. Now intentional.",

    titleLines: ["Monitoring, patching,", "NOC — now aiming", "at infra."],

    bio: "Industrial engineering grad who ended up in IT across banking giants — BRI, BSI, Bank Jakarta. Touched monitoring, patching, and NOC support. Now deliberately building toward DevOps and infrastructure. The breadth was accidental. The direction is on purpose.",

    boldInBio: "deliberately building toward DevOps and infrastructure.",

    cta1: { label: "See my work",  href: "#projects" },
    cta2: { label: "Get in touch", href: "#contact" },

    stats: [
      { label: "degree",    value: "industrial eng",   color: "amber" as const },
      { label: "exp",       value: "2+ yrs IT ops",    color: "green" as const },
      { label: "placement", value: "3 banks",          color: "green" as const },
      { label: "status",    value: "open",             color: "green" as const },
    ],
  },

  // ── Career path card ─────────────────────────────────────────
  careerPath: {
    label: "career_path.log",
    steps: [
      {
        icon:    "🎓",
        role:    "Industrial Engineering",
        company: "Telkom University →",
        note:    "graduated 2021 → googled 'what can engineers do in IT'",
        tag:     null as string | null,
      },
      {
        icon:    "🖥️",
        role:    "Monitoring Team (L0)",
        company: "Boer Technology @ BRI →",
        note:    "first IT job. ELK stack. learned what alerts actually mean.",
        tag:     "2023",
      },
      {
        icon:    "🩹",
        role:    "Patching & Hardening Team",
        company: "Visionet @ BSI →",
        note:    "BigFix, vuln remediation. updates break things. complicated.",
        tag:     "2025",
      },
      {
        icon:    "📡",
        role:    "NOC Support L1",
        company: "Visionet @ Bank Jakarta",
        note:    "OPmanager, Grafana, SLAs, incident escalation at scale.",
        tag:     "current",
      },
    ],
    nextLine: "next stop: DevOps / Infrastructure Engineer",
  },

  // ── About ────────────────────────────────────────────────────
  about: {
    headlineLines: ["Took a detour.", "Learned a lot."],

    paragraphs: [
      `I studied industrial engineering at Telkom University — systems thinking, process optimization, operations. Then I graduated and couldn't find a "proper" engineering job. Ended up in IT almost by accident. Turns out systems thinking applies everywhere, especially in infrastructure.`,
      `Since 2023 I've worked across three of Indonesia's major banks — BRI, Bank Syariah Indonesia, and Bank Jakarta — in monitoring, vulnerability patching, and NOC support. Three flavors of "keep the lights on." Each one taught me something different about how systems behave under real load.`,
      `On the side I've been learning DevOps properly: VPS from scratch, full observability stack (Prometheus + Grafana + Loki), automated deployments with GitHub Actions. This portfolio site runs on that exact setup. The lab is real. The learning is ongoing.`,
    ],

    honestQuote: `I don't have a CS degree or 5 years of DevOps experience. I have 2+ years of watching banking systems fail at inconvenient hours and trying to understand why, plus a homelab I take maybe too seriously. Coming from an industrial engineering background, I ask different questions — sometimes that's actually useful.`,

    closing: `I'm the kind of person who reads the full error message, checks the runbook, and documents what broke so the next shift doesn't have to guess. Industrial engineering trained me to think in systems. IT ops taught me those systems break in creative ways.`,
  },

  // ── Skills ───────────────────────────────────────────────────
  // level: "s" = solid/prod  "l" = learning  "f" = familiar
  skills: [
    {
      icon: "📡", name: "Monitoring & NOC",
      tags: [
        { name: "Grafana",        level: "s" as const },
        { name: "OPmanager",      level: "s" as const },
        { name: "ELK Stack",      level: "s" as const },
        { name: "incident triage",level: "s" as const },
        { name: "Prometheus",     level: "s" as const },
        { name: "Loki",           level: "s" as const },
        { name: "alert rules",    level: "l" as const },
      ],
    },
    {
      icon: "🩹", name: "Patching & Security",
      tags: [
        { name: "BigFix",             level: "s" as const },
        { name: "patch management",   level: "s" as const },
        { name: "vuln remediation",   level: "s" as const },
        { name: "change management",  level: "s" as const },
        { name: "compliance reports", level: "l" as const },
        { name: "Fail2Ban",           level: "l" as const },
      ],
    },
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
      icon: "🐳", name: "Docker & CI/CD",
      tags: [
        { name: "Docker",          level: "s" as const },
        { name: "Compose v2",      level: "s" as const },
        { name: "GitHub Actions",  level: "s" as const },
        { name: "GHCR",            level: "s" as const },
        { name: "bridge networks", level: "l" as const },
        { name: "Kubernetes",      level: "f" as const },
      ],
    },
    {
      icon: "🌐", name: "Networking & Infra",
      tags: [
        { name: "reverse proxy",   level: "s" as const },
        { name: "Let's Encrypt",   level: "s" as const },
        { name: "DNS records",     level: "s" as const },
        { name: "SLA / SOP",       level: "s" as const },
        { name: "ticketing systems",level: "s" as const },
        { name: "WireGuard",       level: "f" as const },
      ],
    },
    {
      icon: "💻", name: "Dev & Other",
      tags: [
        { name: "TypeScript",   level: "s" as const },
        { name: "Next.js",      level: "s" as const },
        { name: "Git",          level: "s" as const },
        { name: "Python",       level: "l" as const },
        { name: "REST APIs",    level: "l" as const },
        { name: "ML basics",    level: "f" as const },
      ],
    },
  ],

  // ── Work Experience ──────────────────────────────────────────
  // type: "current" | "past"
  experience: [
    {
      title:   "System Operation Administrator — NOC Support L1",
      company: "Visionet Data Internasional · Bank Jakarta",
      period:  "Jul 2025 – present",
      type:    "current" as const,
      desc:    "Monitor network, systems, servers, and applications using OPmanager and Grafana. Perform initial diagnosis, escalate to L2/L3 per SLA, handle incident documentation and shift handovers. Where the runbook meets 2am reality.",
      tags:    ["OPmanager", "Grafana", "incident response", "SLA", "ticketing", "escalation", "health checks"],
    },
    {
      title:   "System Operation Administrator — Patching & Hardening",
      company: "Visionet Data Internasional · Bank Syariah Indonesia",
      period:  "Jan 2025 – May 2025",
      type:    "past" as const,
      desc:    "Deployed and monitored OS and application patches using BigFix across BSI infrastructure. Tracked compliance, generated remediation reports, collaborated with security and infra teams. Learned that \"just update it\" is rarely that simple.",
      tags:    ["BigFix", "patch management", "vulnerability remediation", "compliance", "change control", "Windows", "Linux"],
    },
    {
      title:   "IT Engineer — Monitoring Team (L0)",
      company: "Boer Technology · Bank Rakyat Indonesia",
      period:  "Apr 2023 – Jun 2023",
      type:    "past" as const,
      desc:    "First IT role. Monitored banking application dashboards and infrastructure using ELK Stack. Detected anomalies, opened incident tickets, performed health checks on servers and core banking systems. The job that started the whole obsession.",
      tags:    ["ELK Stack", "monitoring", "alerting", "incident tickets", "health checks", "shift handover"],
    },
    // ✏️  Add more: copy a block above
  ],

  // ── Projects ─────────────────────────────────────────────────
  // status: "live" | "wip" | "idea"
  projects: [
    {
      name:   "VPS Lab — Full Production Setup",
      desc:   "Built a production-style VPS from scratch. SSH hardening, UFW firewall, Docker, Nginx Proxy Manager with auto-SSL, GitHub Actions CI/CD, full observability stack. Real server, real config, real mistakes documented along the way.",
      stack:  ["Ubuntu 24.04", "Docker", "Nginx Proxy Manager", "Grafana", "Prometheus", "Loki", "GitHub Actions"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://github.com/ripisopol" }],
    },
    {
      name:   "Observability Stack",
      desc:   "Self-hosted monitoring — Prometheus scrapes metrics, Loki aggregates logs, Promtail ships them, Grafana visualizes everything. All containers internal, accessible only through HTTPS reverse proxy. Overkill for one server. Still worth it.",
      stack:  ["Grafana", "Prometheus", "Loki", "Promtail", "Node Exporter", "Docker Compose"],
      status: "live" as const,
      links:  [],
    },
    {
      name:   "This Portfolio",
      desc:   "Push to main → GitHub Actions builds Docker image → pushes to GHCR → SSHes into VPS → pulls and restarts. Zero manual steps. A portfolio that deploys itself felt appropriate for someone trying to get into DevOps.",
      stack:  ["Next.js 15", "TypeScript", "Tailwind CSS", "Docker", "GitHub Actions", "GHCR"],
      status: "live" as const,
      links:  [
        { icon: "↗", href: "https://github.com/ripisopol/portfolio" },
        { icon: "⊕", href: "https://rizalsolihin.my.id" },
      ],
    },
    // ✏️  Add more: copy a block above
  ],

  // ── Contact ──────────────────────────────────────────────────
  contact: {
    headline: "Let's talk.",
    subtext:  "Open to DevOps / infra roles, IT ops, or anything where systems need watching and fixing. Also open to feedback on my Grafana dashboards.",
    availability: "Open to Work",
    availDesc:    "Looking for DevOps, infrastructure, or IT operations roles. 2+ years experience across banking environments. Based in Central Jakarta. Open to remote or on-site.",
    links: [
      { icon: "✉",  label: "rizalsolihin@hotmail.com",  href: "mailto:rizalsolihin@hotmail.com" },
      { icon: "⌥",  label: "github.com/ripisopol",      href: "https://github.com/ripisopol" },
      { icon: "⇗",  label: "linkedin.com/in/rizalsolihin", href: "https://linkedin.com/in/rizalsolihin" },
    ],
  },
};

export type Config = typeof config;
