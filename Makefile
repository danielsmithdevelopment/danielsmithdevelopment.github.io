# NG parameters
NGCMD=ng
NPMCMD=npm
DOCKERCMD=docker
NGBUILD=$(NGCMD) build
NGBUILDPROD=$(NGCMD) build --prod
DOCKERBUILD=$(DOCKERCMD) build
DOCKERCONTAINERS=$(DOCKERCMD) ps -q
NGSERVE=$(NGCMD) serve
NGSERVEPROD=$(NGCMD) serve --prod
DOCKERRUN=$(DOCKERCMD) run
NGTEST=$(NGCMD) test
NPMINSTALL=$(NPMCMD) install
OUTPUT_PATH=dist
PROD_OUTPUT_PATH=prod-dist
DOCKER_IMAGE=frontend
DOCKER_TAG=test

all: docker docker-run
build: 
		$(NGBUILD) --output-path $(OUTPUT_PATH)
build-serve: 
		$(NGSERVE) --serve-path $(OUTPUT_PATH)
prod: 
		$(NGBUILDPROD) --output-path $(PROD_OUTPUT_PATH)
prod-serve: 
		$(NGSERVEPROD) --serve-path $(PROD_OUTPUT_PATH)
docker:
		$(DOCKERBUILD) -t $(DOCKER_IMAGE):$(DOCKER_TAG) .
docker-run:
		$(DOCKERRUN) -d --name $(DOCKER_IMAGE)-$(DOCKER_TAG) -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm $(DOCKER_IMAGE):$(DOCKER_TAG)
		open http://localhost:4200
test: 
		$(NGTEST)
clean: 
		$(DOCKERCMD) container prune --force
		$(DOCKERCMD) image prune --all --force
		$(DOCKERCMD) container kill `$(DOCKERCONTAINERS)`