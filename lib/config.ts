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
  currentFocus: "System Ops → learning DevOps / infra‑focused backend",

  // ── Hero ─────────────────────────────────────────────────────
  hero: {
    eyebrow: "Industrial engineering background. IT ops in production. Now learning DevOps and backend.",

    titleLines: ["Monitoring, patching,", "NOC — moving toward", "DevOps & backend."],

    bio: "Industrial engineering graduate working in IT operations across three Indonesian banks — BRI, BSI, and Bank Jakarta. I monitor, patch, and support production systems, and started building internal tools when the existing ones were too noisy or too manual; now turning that experience toward DevOps and infra‑focused backend work. AI helped with some of the code, but the incidents and constraints were mine.",

    boldInBio: "now turning that experience toward DevOps and infra‑focused backend work.",

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
        note:    "graduated 2021. googled 'what jobs can engineers get'. ended up here.",
        tag:     null as string | null,
      },
      {
        icon:    "🖥️",
        role:    "Monitoring Team (L0)",
        company: "Boer Technology @ BRI →",
        note:    "first IT job. stared at dashboards. learned alerts lie sometimes.",
        tag:     "2023",
      },
      {
        icon:    "🩹",
        role:    "Patching & Hardening Team",
        company: "Visionet @ BSI →",
        note:    "BigFix. patch management. learned 'just update it' is never just updating it.",
        tag:     "2025",
      },
      {
        icon:    "📡",
        role:    "NOC Support L1",
        company: "Visionet @ Bank Jakarta",
        note:    "OPmanager, Grafana, SLAs. built some tools. team uses them. still surprised.",
        tag:     "current",
      },
    ],
    nextLine: "next: DevOps / Infrastructure Engineer. working on it.",
  },

  // ── About ────────────────────────────────────────────────────
  about: {
    headlineLines: ["Took a detour.", "Learned a lot.", "Still learning."],

    paragraphs: [
      `I studied industrial engineering at Telkom University — systems thinking, process optimization, how to make things not break. When I graduated, I couldn't find a "proper" engineering job and landed in IT almost by accident. It turned out systems thinking applies even more in infrastructure. The degree wasn't wasted. It was just misfiled.`,
      `Since 2023 I've worked across three of Indonesia's major banks — BRI, Bank Syariah Indonesia, and Bank Jakarta — in monitoring, vulnerability patching, and NOC support. Three flavors of "keep the lights on." Each one taught me something different about how systems behave under real load and under real constraints.`,
      `On the lab side: VPS from scratch, observability stack, and CI/CD pipeline. This portfolio deploys itself on every push, which felt appropriate. The setup is close to production, and the mistakes are real — I treat it as a place to practice infra decisions before suggesting them at work.`,
      `At work I've also been building tools that solve specific problems. A Python dashboard that pulls from internal monitoring tools, filters down to the alerts worth caring about, and generates ready-to-paste ticket templates — the team uses it daily. A UiPath Studio automation I initiated from scratch that handles data fetching, screenshot capture, and report generation for flash and end-of-shift reports, cutting prep time down to review-and-send.`,
    ],

    honestQuote: `No CS degree. No five-year DevOps track record. What I do have: 2+ years of watching banking infrastructure fail at inconvenient hours, a homelab I take seriously, and a habit of building tools when the existing ones are too noisy or too manual. AI assisted parts of the code, but the incidents, context, and follow-up were on me — and I document what I ship.`,

    closing: `I read the full error message. I check the runbook. I document what broke. Industrial engineering taught me to think in systems — IT ops taught me those systems break in ways the runbook hasn't seen yet. I write those down too.`,
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
        { name: "Fail2Ban",           level: "s" as const },
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
        { name: "UiPath",       level: "l" as const },
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
      highlights: [
        "Own first-line investigation for production alerts in banking environments, escalating clearly and on time to L2/L3.",
        "Keep incident records and shift handovers structured so issues are easy to trace and follow up.",
        "Use monitoring data (Grafana, OPmanager) to spot recurring patterns and suggest runbook improvements.",
      ],
      tags: ["OPmanager", "Grafana", "incident response", "SLA", "ticketing", "escalation", "health checks"],
    },
    {
      title:   "System Operation Administrator — Patching & Hardening",
      company: "Visionet Data Internasional · Bank Syariah Indonesia",
      period:  "Jan 2025 – May 2025",
      type:    "past" as const,
      desc:    "Deployed and monitored OS and application patches using BigFix across BSI infrastructure. Tracked compliance, generated remediation reports, collaborated with security and infra teams. Learned that \"just update it\" is rarely that simple.",
      highlights: [
        "Ran patch deployments with BigFix across Windows and Linux servers under change-management constraints.",
        "Tracked patch compliance and surfaced gaps to infra and security teams in a way they could act on.",
        "Learned to coordinate maintenance windows and rollbacks when \"just update it\" introduced new issues.",
      ],
      tags: ["BigFix", "patch management", "vulnerability remediation", "compliance", "change control", "Windows", "Linux"],
    },
    {
      title:   "IT Engineer — Monitoring Team (L0)",
      company: "Boer Technology · Bank Rakyat Indonesia",
      period:  "Apr 2023 – Jun 2023",
      type:    "past" as const,
      desc:    "First IT role. Monitored banking application dashboards and infrastructure using ELK Stack. Detected anomalies, opened incident tickets, performed health checks on servers and core banking systems. The job that started the whole obsession.",
      highlights: [
        "Monitored ELK dashboards for core banking applications and infrastructure during shift-based coverage.",
        "Raised incident tickets with enough context that higher-level teams could act quickly.",
        "Handled routine health checks and shift handovers, learning how production incidents actually unfold.",
      ],
      tags: ["ELK Stack", "monitoring", "alerting", "incident tickets", "health checks", "shift handover"],
    },
    // ✏️  Add more: copy a block above
  ],

  // ── Projects ─────────────────────────────────────────────────
  // status: "live" | "wip" | "idea"
  projects: [
    {
      name:   "Shift Report Automation",
      desc:   "Internal UiPath Studio automation that semi-automates our four-hour Flash report cycle. A local robot captures dashboard screenshots via UI automation, pulls caption data from the monitoring API, and prepares content for WhatsApp group delivery so the team reviews and sends instead of rebuilding reports from scratch.",
      highlights: [
        "Automates the heavy lifting in a manual process where someone took screenshots, wrote captions, and sent Flash reports to a WhatsApp group every four hours.",
        "Uses UiPath Studio to drive the UI for screenshots and call the monitoring API for accurate captions from internal dashboards.",
        "Runs as an internal tool from a local UiPath robot, turning each cycle into a quick review-and-send step instead of a full manual rebuild.",
      ],
      stack:  ["UiPath Studio", "HTTP Requests", "Excel", "UI Automation"],
      status: "live" as const,
      links:  [],
    },
    {
      name:   "VPS Lab — Full Production Setup",
      desc:   "Built a production-style VPS from scratch. SSH hardening, UFW firewall, Docker, Nginx Proxy Manager with auto-SSL, GitHub Actions CI/CD, full observability stack. Real server, real config, real mistakes documented along the way.",
      highlights: [
        "Configures a single VPS to feel like a small production environment, not a toy VM.",
        "Uses Docker and Nginx Proxy Manager with auto-SSL to host multiple services safely.",
        "Connects GitHub Actions to build and deploy containers, mirroring CI/CD patterns from work.",
      ],
      stack:  ["Ubuntu 24.04", "Docker", "Nginx Proxy Manager", "Grafana", "Prometheus", "Loki", "GitHub Actions"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://github.com/ripisopol" }],
    },
    {
      name:   "Observability Stack",
      desc:   "Self-hosted monitoring — Prometheus scrapes metrics, Loki aggregates logs, Promtail ships them, Grafana visualizes everything. All containers internal, accessible only through HTTPS reverse proxy. Overkill for one server. Still worth it.",
      highlights: [
        "Aggregates metrics and logs into a single place using Prometheus, Loki, and Grafana.",
        "Runs all observability components behind HTTPS with restricted access, mirroring production expectations.",
        "Used as a lab to experiment with alert rules and dashboards before applying ideas at work.",
      ],
      stack:  ["Grafana", "Prometheus", "Loki", "Promtail", "Node Exporter", "Docker Compose"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://grafana.rizalsolihin.my.id" }],
    },
    {
      name:   "This Portfolio",
      desc:   "Push to main → GitHub Actions builds Docker image → pushes to GHCR → SSHes into VPS → pulls and restarts. Zero manual steps. A portfolio that deploys itself felt appropriate for someone trying to get into DevOps.",
      highlights: [
        "Uses Docker and GHCR to build and ship the app as a container on every push to main.",
        "Automates deployment to a VPS over SSH, removing manual steps from the release process.",
        "Acts as a simple but real example of CI/CD and infra as part of a personal project.",
      ],
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
    subtext:  "Open to DevOps, cloud / infrastructure, or backend roles with a strong operations focus.",
    availability: "Open to Work",
    availDesc:    "Looking for DevOps, cloud / infrastructure, or backend roles with an operations focus. 2+ years experience across banking environments. Based in Central Jakarta. Open to remote or on-site.",
    links: [
      { icon: "✉",  label: "rizalsolihin@hotmail.com",  href: "mailto:rizalsolihin@hotmail.com" },
      { icon: "⌥",  label: "github.com/ripisopol",      href: "https://github.com/ripisopol" },
      { icon: "⇗",  label: "linkedin.com/in/rizalsolihin", href: "https://linkedin.com/in/rizalsolihin" },
    ],
  },

  // ── Certifications ───────────────────────────────────────────
  // status: "done" | "inprogress" | "expired"
  // ✏️  Add your certs here. Copy a block to add more.
  certifications: [
    {
      name:     "AWS Certified Cloud Practitioner",
      issuer:   "Amazon Web Services",
      year:     "2022",
      status:   "expired" as const,
      credUrl:  "",   // ✏️  paste credential URL if you have it
    },
    // ✏️  Add more real certifications here when you have them
  ],

  // ── Currently Learning ───────────────────────────────────────
  // ✏️  Keep this honest — what you're actually working on right now
  learning: {
    headline: "Always something in the pipeline.",
    items: [
      { topic: "Kubernetes",        detail: "k3s on local VM, working through CKA prep material" },
      { topic: "Terraform",         detail: "infrastructure as code — stop doing things manually" },
      { topic: "Ansible",           detail: "configuration management basics" },
      { topic: "Python scripting",  detail: "beyond AI-assisted — actually understanding what I ship" },
      { topic: "Bash",              detail: "proper scripting, not just one-liners" },
      // ✏️  Add or remove items freely
    ],
  },

  // ── Languages ────────────────────────────────────────────────
  languages: [
    { lang: "Bahasa Indonesia", level: "Native"      },
    { lang: "English",          level: "Professional" },
    // ✏️  Add more if needed
  ],

  // ── Open To ──────────────────────────────────────────────────
  openTo: [
    "DevOps Engineer",
    "Cloud / Infrastructure Engineer",
    "Site Reliability Engineer",
    "Platform Engineer",
    "Backend Engineer (infra / operations focus)",
    "IT Operations / NOC",
  ],

  // ── References ───────────────────────────────────────────────
  // ✏️  Add real references when you're ready — keep name/title/company,
  //     leave contact blank until you have permission to share publicly.
  //     Or just leave the placeholder text as-is.
  references: {
    note: "Professional references available on request.",
    items: [
      // ✏️  Add references here once you have permission to share their details
    ],
  },
};

export type Config = typeof config;
// ── append new sections ──────────────────────────────────────────
