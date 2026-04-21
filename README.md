# danielsmithdevelopment.github.io

Personal site (Next.js) with **GitHub Pages** and an optional **container image** on **GHCR**.

## Quick start

```bash
cd personal-site
npm install
cp .env.example .env.local   # optional
npm run dev
```

Or from the repo root: `make site-install && make site-dev`.

## CI / quality checks

On every **pull request** and **push** to **`main` or `master`**, Actions runs:

1. **Lint** — `npm run lint` (TypeScript `tsc --noEmit`)
2. **Tests** — `npm run test` (Vitest)
3. **Build** — `next build` (static export)
4. **Docker** — `docker build` to confirm the image still builds

From the repo root: `make site-lint`, `make site-test`, `make site-build`.

## Deploy (push to default branch)

This repo’s default branch is **`master`**. Pushing there (or to **`main`** if you rename later) runs the same checks, then:

- **GitHub Pages** — static `out/` from [the workflow](.github/workflows/deploy-personal-site.yml)
- **GHCR** — Docker image pushed to  
  `ghcr.io/<github-username>/<repo>/personal-site`  
  tags: `latest` and short Git SHA

**Pages:** Settings → **Pages** → source **GitHub Actions**.

**Container:** open the repo’s **Packages** (or your profile → Packages), find `personal-site`, adjust visibility if you want it public. Pull example:

```bash
docker pull ghcr.io/danielsmithdevelopment/danielsmithdevelopment.github.io/personal-site:latest
docker run --rm -p 8080:80 ghcr.io/danielsmithdevelopment/danielsmithdevelopment.github.io/personal-site:latest
# site at http://localhost:8080
```

(Replace owner/repo with your GitHub username and repository name if different.)

## Layout

All site source lives under **`personal-site/`** (`Dockerfile`, tests, Next app). The repo root holds `Makefile`, workflows, and this README.
