ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

all: build-docker

build-docker:
	@docker build -f $(ROOT_DIR)/infrastructure/docker/Dockerfile --target dev --tag jlackipl $(ROOT_DIR)

vendor:
	docker run -v $(ROOT_DIR):/app -w /app jlackipl sh -c 'npm audit && npm install --force'

bash:
	docker run -v $(ROOT_DIR):/app -it -w /app jlackipl bash

up:
	@docker-compose up --detach --force-recreate