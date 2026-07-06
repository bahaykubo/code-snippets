#!/bin/bash

docker stop postgresql || true
docker rm postgresql || true

# Create a postgresql instance locally for the test with a name of 'postgresql'
# We will not need this if we are connecting to a static environment database
docker run --name postgresql \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=userpass \
  -p 6432:5432 \
  -d postgres

RETRY_LIMIT_IN_SECONDS=120
RETRY_INTERVAL_IN_SECONDS=5
elapsed_time=0
until docker exec postgresql pg_isready -U user > /dev/null 2>&1; do
  if [ "$elapsed_time" -ge "$RETRY_LIMIT_IN_SECONDS" ]; then
    echo "postgresql did not become ready within ${RETRY_LIMIT_IN_SECONDS}s"
    exit 1
  fi
  sleep "$RETRY_INTERVAL_IN_SECONDS"
  elapsed_time=$((elapsed_time + RETRY_INTERVAL_IN_SECONDS))
done
