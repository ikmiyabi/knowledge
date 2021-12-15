#!/bin/bash

echo "deploy start"

yarn build
git checkout deploy
rm -rf docs
mv dist/ docs/
git add .
git commit -m deploy
git push origin deploy
git checkout main

echo "deploy end"