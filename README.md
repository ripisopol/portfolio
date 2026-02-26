# Portfolio

Personal portfolio — Next.js 15, TypeScript, Tailwind, Framer Motion.

## Edit content

All content lives in **`lib/config.ts`**. That's the only file you need to touch
to update name, projects, skills, experience, etc.

## Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

Push to `main` → GitHub Actions builds Docker image → pushes to GHCR → deploys to VPS.

### Required secrets

| Secret      | Value                          |
|-------------|-------------------------------|
| `VPS_HOST`  | your VPS IP or domain         |
| `VPS_USER`  | `ripisopol`                   |
| `VPS_KEY`   | private key (nopass version)  |

### NPM proxy host (after deploy)

Point `rizalsolihin.my.id` → `portfolio:3000` in Nginx Proxy Manager.
