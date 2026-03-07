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

    bio: "Industrial engineering graduate with 2+ years in IT operations across three Indonesian banks — BRI, BSI, and Bank Jakarta. Built two internal tools the team actually uses: a monitoring dashboard that cuts noise down to actionable alerts, and a UiPath automation that collapsed a four-hour manual report cycle into a review-and-send step. Now taking that ops background into DevOps and infrastructure engineering.",

    boldInBio: "Now taking that ops background into DevOps and infrastructure engineering.",

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
      `Since 2023 I've worked across three of Indonesia's major banks — BRI, Bank Syariah Indonesia, and Bank Jakarta — in monitoring, vulnerability patching, and NOC support. Three different flavors of "keep the lights on." Each taught me something different about how systems behave under real load and real constraints — and how fast things go wrong when those constraints get ignored.`,
      `When the tools weren't good enough, I built better ones. A Python dashboard that filters monitoring noise down to alerts worth acting on and generates ready-to-paste ticket templates — the team uses it every shift. A UiPath automation I initiated from scratch that turned a four-hour manual Flash report cycle into a review-and-send step. Both still running in production.`,
      `On the lab side: a VPS hardened from scratch, full observability stack, and a CI/CD pipeline that deploys this portfolio on every push to main. The setup mirrors real production decisions — because if I can't defend the config here, I shouldn't be suggesting it at work.`,
    ],

    honestQuote: `No CS degree. No five-year DevOps track record. What I do have: 2+ years watching banking infrastructure fail at inconvenient hours, a homelab I treat seriously, and a habit of building tools when the existing ones are too slow or too noisy. AI assisted parts of the code — the incidents, constraints, and follow-up were mine, and I document what I ship.`,

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
      desc:    "First-line monitoring and incident response across Bank Jakarta's network, systems, and applications using OPmanager and Grafana. Initial diagnosis, SLA-bound escalation, incident documentation, and shift handovers. Also where I started building tools to make the work less manual.",
      highlights: [
        "Lead first-line investigation for production alerts across banking infrastructure — escalate with enough context that L2/L3 can act immediately, no back-and-forth.",
        "Built a Python monitoring dashboard used by the team every shift: filters noise to actionable alerts and generates structured ticket templates ready to paste.",
        "Maintained shift handover quality to surface recurring patterns; used findings to propose runbook improvements that reduced repeat escalations.",
      ],
      tags: ["OPmanager", "Grafana", "incident response", "SLA", "ticketing", "escalation", "health checks"],
    },
    {
      title:   "System Operation Administrator — Patching & Hardening",
      company: "Visionet Data Internasional · Bank Syariah Indonesia",
      period:  "Jan 2025 – May 2025",
      type:    "past" as const,
      desc:    "Patch deployment and compliance tracking across BSI infrastructure using BigFix. Managed OS and application updates across Windows and Linux servers under strict change-management gates in a regulated banking environment.",
      highlights: [
        "Deployed OS and application patches via BigFix across Windows and Linux servers in a regulated banking environment with strict change-management gates.",
        "Tracked compliance gaps and surfaced remediation priorities to infra and security teams before they became audit findings.",
        "Coordinated maintenance windows and led rollbacks when patches introduced regressions — learned that change risk is as important as the patch itself.",
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
        "Monitored ELK dashboards for core banking applications and infrastructure across shift-based 24/7 coverage.",
        "Raised incident tickets with structured context — symptom, timeline, affected systems — so L2 teams could act without needing a follow-up call.",
        "Maintained shift handover quality so the next team inherited a clear picture, not just a list of open tickets.",
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
      desc:   "Proposed and built a UiPath Studio automation that eliminated the manual rebuild in our four-hour Flash report cycle. The robot captures dashboard screenshots via UI automation, pulls live caption data from the monitoring API, and formats everything for WhatsApp delivery — the team reviews and sends instead of rebuilding from scratch every cycle.",
      highlights: [
        "Collapsed a four-hour manual cycle (screenshots → captions → formatting → send) to a review-and-send step — proposed and built from scratch with no prior automation at the team.",
        "Integrated UiPath UI automation and HTTP requests to pull accurate, real-time data from internal monitoring tools — no manual copy-paste.",
        "In daily production use by the NOC team at Bank Jakarta.",
      ],
      stack:  ["UiPath Studio", "HTTP Requests", "Excel", "UI Automation"],
      status: "live" as const,
      links:  [],
    },
    {
      name:   "VPS Lab — Full Production Setup",
      desc:   "A production-grade VPS environment built from scratch — not a tutorial follow-along. SSH hardening, UFW, Fail2Ban, Docker, Nginx Proxy Manager with auto-SSL, full observability stack, and CI/CD via GitHub Actions. Config decisions documented. Mistakes real.",
      highlights: [
        "Hardened a raw Ubuntu VPS to production standards: SSH key-only auth, custom port, UFW, Fail2Ban, sysctl tuning, auditd — fully automated via Ansible playbook.",
        "Hosts multiple services behind HTTPS using Nginx Proxy Manager with auto-SSL, each isolated in Docker bridge networks.",
        "Push to main → GitHub Actions builds image → pushes to GHCR → deploys to VPS over SSH. Zero manual steps in the release process.",
      ],
      stack:  ["Ubuntu 24.04", "Docker", "Nginx Proxy Manager", "Grafana", "Prometheus", "Loki", "GitHub Actions"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://github.com/ripisopol" }],
    },
    {
      name:   "Observability Stack",
      desc:   "Self-hosted Prometheus + Loki + Grafana stack — metrics, logs, and alerting unified. All containers run internally behind an HTTPS reverse proxy. Built to mirror what I work with in production environments, so experiments here translate directly into informed suggestions at work.",
      highlights: [
        "Prometheus scrapes metrics, Promtail ships logs to Loki, Grafana visualizes both — same pattern as production, practiced and broken here first.",
        "All services locked behind HTTPS with restricted access, matching the security posture expected in regulated environments.",
        "Used to validate alert rules and dashboard queries before proposing changes to the team's production monitoring setup.",
      ],
      stack:  ["Grafana", "Prometheus", "Loki", "Promtail", "Node Exporter", "Docker Compose"],
      status: "live" as const,
      links:  [{ icon: "↗", href: "https://grafana.rizalsolihin.my.id" }],
    },
    {
      name:   "This Portfolio",
      desc:   "Push to main → GitHub Actions builds Docker image → pushes to GHCR → SSHes into VPS → pulls and restarts. Zero manual steps. A portfolio that deploys itself felt appropriate for someone trying to get into DevOps.",
      highlights: [
        "Containerized with Docker, image stored in GHCR, deployed automatically on every push to main.",
        "GitHub Actions handles build, push, and SSH deployment to VPS — no manual release steps.",
        "A working example of CI/CD and container-based infra, not just a description of one.",
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
      status:   "inprogress" as const,
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
      { topic: "Ansible",           detail: "configuration management — automating VPS hardening and deploys" },
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
  ],

  // ── References ───────────────────────────────────────────────
  // ✏️  Add real references when you're ready — keep name/title/company,
  //     leave contact blank until you have permission to share publicly.
  //     Or just leave the placeholder text as-is.
  references: {
    note: "Professional references available on request.",
    items: [] as { name: string; title: string; company: string; relation?: string; contact?: string }[],
      // ✏️  Add references here once you have permission to share their details
  },
};

export type Config = typeof config;
// ── append new sections ──────────────────────────────────────────