#!/bin/bash

echo "~> building app"

docker exec -it network-node npm run build
