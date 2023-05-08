#!/bin/bash
set -e

socat tcp-listen:4040,reuseaddr,fork tcp:localhost:4000 &

exec "$@"
