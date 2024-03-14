#! /bin/bash

docker build -t house/frontend:1.0.0 .

# docker run -d -p 3000:3000 --name frontend house/frontend:1.0.0