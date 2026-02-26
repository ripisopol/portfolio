# rizal's portfolio

Personal portfolio site — live at [rizalsolihin.my.id](https://rizalsolihin.my.id)

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion. Deployed to a self-managed VPS via GitHub Actions.

---

## about this project

This portfolio is part of my learning journey into DevOps and infrastructure. The app itself is fairly simple — the interesting part is the infrastructure behind it.

**The deployment pipeline:**
```
push to main
  → GitHub Actions builds Docker image
  → pushes to GitHub Container Registry (GHCR)
  → SSHes into VPS
  → pulls new image
  → restarts container
```

No manual steps. No clicking. I thought a portfolio that deploys itself was appropriate.

---

## stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Container | Docker (standalone output) |
| CI/CD | GitHub Actions |
| Registry | GitHub Container Registry |
| Proxy | Nginx Proxy Manager |
| SSL | Let's Encrypt (auto-renew) |
| Server | Ubuntu 24.04 VPS |

---

## infrastructure

The VPS runs a few other things alongside this portfolio:

- **Grafana + Prometheus + Loki + Promtail** — observability stack, monitoring the server itself
- **Portainer** — container management UI
- **Nginx Proxy Manager** — reverse proxy, handles SSL for all subdomains

All services run in Docker. None of them expose ports directly — everything goes through NPM.

---

## edit content

All content lives in **`lib/config.ts`**. That's the only file you need to touch to update projects, skills, experience, etc. No component changes needed.

---

## run locally

```bash
git clone https://github.com/ripisopol/portfolio
cd portfolio
npm install
npm run dev
# → http://localhost:3000
```

---

## deploy

Handled automatically by `.github/workflows/deploy.yml` on push to `main`.

Required repository secrets:

| Secret | Description |
|--------|-------------|
| `VPS_HOST` | VPS IP address |
| `VPS_USER` | SSH username |
| `VPS_KEY` | SSH private key (no passphrase) |

---

## honest note

I'm not a senior DevOps engineer. I'm someone who studied industrial engineering, ended up in IT, worked in monitoring and NOC support, and is now deliberately learning infrastructure properly. This project is part of that learning — not a showcase of years of expertise.

If something here could be done better, I'm genuinely open to feedback.

---

*built and maintained by [Rizal Solihin](https://rizalsolihin.my.id)*
