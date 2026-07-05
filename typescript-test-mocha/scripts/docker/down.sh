#!/bin/bash

set -x
export COMPOSE_HTTP_TIMEOUT=180

docker compose -p test-poc down
