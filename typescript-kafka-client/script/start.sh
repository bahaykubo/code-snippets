#!/bin/bash

set -x
export COMPOSE_HTTP_TIMEOUT=180

docker compose -p kafka -f docker-compose.yml up -d
