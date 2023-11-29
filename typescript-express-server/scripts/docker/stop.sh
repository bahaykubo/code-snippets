#!/bin/bash

docker-compose -f ./scripts/docker/docker-compose.ci.yml stop
docker-compose -f ./scripts/docker/docker-compose.ci.yml rm -f
