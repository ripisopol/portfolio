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
    eyebrow: "Industrial engineer turned accidental IT person. The accidental part is over.",

    titleLines: ["Monitoring, patching,", "NOC — now aiming", "at infra."],

    bio: "Industrial engineering grad who ended up in IT at three Indonesian banks — BRI, BSI, Bank Jakarta. Did monitoring, patching, NOC. Built some internal tools with a lot of AI help, which I'm being upfront about. Now deliberately aiming at DevOps and infrastructure. The detour was unplanned. The direction isn't.",

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
      `I studied industrial engineering at Telkom University — systems thinking, process optimization, how to make things not break. Then I graduated and couldn't find a "proper" engineering job. Ended up in IT almost by accident. Turns out systems thinking applies everywhere, especially in infrastructure. The degree wasn't wasted. It was just misfiled.`,
      `Since 2023 I've worked across three of Indonesia's major banks — BRI, Bank Syariah Indonesia, and Bank Jakarta — in monitoring, vulnerability patching, and NOC support. Three flavors of "keep the lights on." Each one taught me something different about how systems behave under real load.`,
      `On the side: VPS from scratch, observability stack, CI/CD pipeline. This portfolio deploys itself on every push, which felt appropriate. The lab is real. The mistakes are documented. Some of them are in the troubleshooting section of a very long Word document.`,
      `At work I've also been building things that scratch real itches. A Python dashboard that pulls from internal monitoring tools, filters down to only the alerts worth caring about, and spits out ready-to-paste ticket templates — the team uses it daily. Separately, a UiPath Studio automation I initiated from scratch that handles data fetching, screenshot capture, and report generation for flash and end-of-shift reports. Both were heavily AI-assisted. Being upfront about that. They work, people use them, and the problems they solve were real.`,
    ],

    honestQuote: `No CS degree. No 5 years of DevOps. What I have: 2+ years of watching banking infrastructure fail at inconvenient hours, a homelab I take perhaps too seriously, and a habit of building tools when the existing ones are annoying enough. A lot of this was AI-assisted. I document that honestly because I think it matters — and because someone will ask.`,

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
      name:   "NOC Alert Dashboard",
      desc:   "Python web app built for my team at work — funnels alerts from internal monitoring tools down to only what needs attention. Healthy services stay hidden unless toggled. Has up/down history per service and generates ready-to-paste ticket and escalation templates. Adopted by the full team. L2 said it makes life easier, which is the highest possible praise in NOC.",
      stack:  ["Python", "REST APIs", "AI-assisted"],
      status: "live" as const,
      links:  [],
    },
    {
      name:   "Shift Report Automation",
      desc:   "UiPath Studio automation I initiated and built from scratch at work. Handles data fetching, screenshot capture of dashboard panels, and report generation for two report types — flash reports (WhatsApp) and end-of-shift reports (HTML email + Excel). Reduced report prep from manual writing to review-and-send. Distributed to multiple teams, layers, and managers.",
      stack:  ["UiPath Studio", "HTTP Requests", "Excel", "UI Automation"],
      status: "wip" as const,
      links:  [],
    },
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
      links:  [{ icon: "↗", href: "https://grafana.rizalsolihin.my.id" }],
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
    subtext:  "Open to DevOps, infra, or IT ops roles. Also open to feedback on the Grafana dashboards, though be gentle.",
    availability: "Open to Work",
    availDesc:    "Looking for DevOps, infrastructure, or IT operations roles. 2+ years experience across banking environments. Based in Central Jakarta. Open to remote or on-site.",
    links: [
      { icon: "✉",  label: "rizalsolihin@hotmail.com",  href: "mailto:rizalsolihin@hotmail.com" },
      { icon: "✉",  label: "ripisopol@gmail.com",       href: "mailto:ripisopol@gmail.com" },
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
    {
      name:     "Your Cert Name Here",
      issuer:   "Issuing Body",
      year:     "2025",
      status:   "done" as const,
      credUrl:  "",
    },
    {
      name:     "Another Cert in Progress",
      issuer:   "Issuing Body",
      year:     "",
      status:   "inprogress" as const,
      credUrl:  "",
    },
    // ✏️  Add more: copy a block above
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
    "Infrastructure Engineer",
    "IT Operations",
    "NOC / SOC",
    "Site Reliability Engineering",
    // ✏️  Remove anything that doesn't fit, add anything that does
  ],

  // ── References ───────────────────────────────────────────────
  // ✏️  Add real references when you're ready — keep name/title/company,
  //     leave contact blank until you have permission to share publicly.
  //     Or just leave the placeholder text as-is.
  references: {
    note: "Available on request.",
    items: [
      {
        name:     "Your Reference Name",
        title:    "Their Job Title",
        company:  "Their Company",
        relation: "e.g. Direct supervisor at Visionet",
        contact:  "",   // ✏️  only add if you have permission
      },
      // ✏️  Add more: copy a block above
    ],
  },
};

export type Config = typeof config;
// ── append new sections ──────────────────────────────────────────
