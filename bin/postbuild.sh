#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

cp -r ./db.json ./.amplify-hosting/compute/default
cp -r ./server.js ./.amplify-hosting/compute/default
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

cp -r public ./.amplify-hosting/compute/default/public

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json