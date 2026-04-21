# Personal site

Next.js app for [danielsmithdevelopment.com](https://danielsmithdevelopment.com), built on the Tailwind Plus Next.js template.

## Development

```bash
cd personal-site
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tests & lint

```bash
npm run test        # Vitest (unit)
npm run test:watch
npm run lint        # tsc --noEmit
```

## Production build

Static export for GitHub Pages:

```bash
npm run build
```

Output: `out/`. CI runs this on every PR and on push to **`main`** or **`master`** (default branch).

## Docker (optional)

Nginx serving the same static `out/` as Pages:

```bash
docker build -t personal-site:local .
docker run --rm -p 8080:80 personal-site:local
```

`NEXT_PUBLIC_SITE_URL` defaults in the `Dockerfile`; override at build with `--build-arg`.

## Structure

- `src/lib/site.ts` — name, links, résumé roles, featured repos
- `public/` — static assets including résumé PDF and `CNAME`
- `vitest.config.ts` — unit tests (`src/**/*.test.ts`)
