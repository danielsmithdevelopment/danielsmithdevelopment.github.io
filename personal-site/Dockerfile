# Static export (output: 'export') + nginx — same artifact shape as GitHub Pages.
# Run: docker run -p 8080:80 ghcr.io/<owner>/<repo>/personal-site:latest
# Build: docker build -t personal-site:test .

FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG NEXT_PUBLIC_SITE_URL=https://danielsmithdevelopment.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html
# Single-page app behavior isn’t required for fully static export; default nginx is enough.
EXPOSE 80
