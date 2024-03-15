#! /bin/bash
cp package*.json app/
cd app
npm i
cd ..

docker build -t house/frontend:1.0.0 .

# docker run -d -p 3000:3000 --name frontend house/frontend:1.0.0