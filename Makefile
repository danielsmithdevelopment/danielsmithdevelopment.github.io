# Root Makefile — personal site in personal-site/ (Next.js, GitHub Pages via Actions)
#
#   make help | site-install | site-dev | site-build | site-lint | site-clean | deploy

.PHONY: help default \
	site-install site-dev site-test site-build site-lint site-clean open-site deploy \
	clean-repo

PERSONAL_SITE := personal-site
NEXT_PORT := 3000
NPM := npm

default: help

help:
	@echo "Personal site (Next.js)"
	@echo "  make site-install   npm ci in $(PERSONAL_SITE)/"
	@echo "  make site-dev       next dev → http://localhost:$(NEXT_PORT)"
	@echo "  make site-test      npm run test (Vitest)"
	@echo "  make site-build     static export → $(PERSONAL_SITE)/out/"
	@echo "  make site-lint      npm run lint (tsc --noEmit)"
	@echo "  make site-clean     rm $(PERSONAL_SITE)/.next $(PERSONAL_SITE)/out"
	@echo "  make open-site      open browser on :$(NEXT_PORT)"
	@echo ""
	@echo "Deploy: push to master (or main) → .github/workflows/deploy-personal-site.yml"
	@echo "  make deploy         print reminder"
	@echo ""
	@echo "Maintenance"
	@echo "  make clean-repo     remove root node_modules if present (legacy Angular)"
	@echo ""
	@echo "Also see $(PERSONAL_SITE)/Makefile for the same targets from that directory."

site-install:
	cd $(PERSONAL_SITE) && $(NPM) ci

site-dev:
	cd $(PERSONAL_SITE) && $(NPM) run dev

site-test:
	cd $(PERSONAL_SITE) && $(NPM) run test

site-build:
	cd $(PERSONAL_SITE) && $(NPM) run build

site-lint:
	cd $(PERSONAL_SITE) && $(NPM) run lint

site-clean:
	rm -rf $(PERSONAL_SITE)/.next $(PERSONAL_SITE)/out

open-site:
	open http://localhost:$(NEXT_PORT)

deploy:
	@echo "Production: push to master or main; GitHub Actions builds $(PERSONAL_SITE)/ and publishes to Pages."
	@echo "Workflow: .github/workflows/deploy-personal-site.yml"

clean-repo:
	@if [ -d node_modules ]; then rm -rf node_modules && echo "Removed root node_modules/."; else echo "No root node_modules/."; fi
