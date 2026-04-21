# Convenience targets for this Next.js app. From repo root you can also: make site-dev, etc.
.PHONY: help install dev test build lint clean start open

NEXT_PORT := 3000
NPM := npm

help:
	@echo "From this directory:"
	@echo "  make install | dev | test | build | lint | clean | open"
	@echo "From repo root: make site-dev | make site-test | make site-build | ..."

install:
	$(NPM) ci

dev:
	$(NPM) run dev

test:
	$(NPM) run test

build:
	$(NPM) run build

start:
	$(NPM) run start

lint:
	$(NPM) run lint

clean:
	rm -rf .next out

open:
	open http://localhost:$(NEXT_PORT)
