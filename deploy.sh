#!/bin/bash

echo "deploy start"

yarn build
git checkout deploy
rm -rf docs
mv dist/ docs/
git add .
git commit -m "[ci skip] deploy"
git push origin deploy

echo "deploy end"