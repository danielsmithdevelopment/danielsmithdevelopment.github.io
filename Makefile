# NG parameters
NGCMD=ng
NPMCMD=npm
DOCKERCMD=docker
DOCKERCOMPOSECMD=docker-compose
FIREBASECMD=firebase
FIREBASELOGIN=$(FIREBASECMD) login
FIREBASEDEPLOY=$(FIREBASECMD) deploy
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
DOCKER_IMAGE=danielsmithdev/see-the-greens-frontend
DOCKER_TAG=latest
HOST_PORT=4200

all: compose-up open-web
build: 
		$(NGBUILD) --output-path $(OUTPUT_PATH)
build-serve: 
		$(NGSERVE) --serve-path $(OUTPUT_PATH)
prod: 
		$(NGBUILDPROD) --output-path $(PROD_OUTPUT_PATH)
prod-serve: 
		$(NGSERVEPROD) --serve-path $(PROD_OUTPUT_PATH)
login:
		$(FIREBASELOGIN)
deploy: prod
		$(FIREBASEDEPLOY) --only hosting
docker:
		$(DOCKERBUILD) -t $(DOCKER_IMAGE):$(DOCKER_TAG) .
docker-run:
		$(DOCKERRUN) -d --name $(DOCKER_IMAGE)-$(DOCKER_TAG) -v ${PWD}:/app -v /app/node_modules -p $(HOST_PORT):4200 --rm $(DOCKER_IMAGE):$(DOCKER_TAG)
compose-up:
		$(DOCKERCOMPOSECMD) up -d
compose-down:
		$(DOCKERCOMPOSECMD) down
open-web:
		open http://localhost:$(HOST_PORT)
test: 
		$(NGTEST)
clean:
		$(DOCKERCOMPOSECMD) down
		$(DOCKERCMD) container prune --force
		$(DOCKERCMD) image prune --force
sanitize: 
		$(DOCKERCMD) container prune --force
		$(DOCKERCMD) image prune --all --force
		$(DOCKERCMD) container kill `$(DOCKERCONTAINERS)`