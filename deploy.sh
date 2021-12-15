#!/bin/bash

echo "deploy start"

yarn build &&\

mv .gitignore.deploy .gitignore
git checkout deploy
rm -rf docs
mv dist/ docs/
git add -A
git commit -m "[ci skip] deploy"
git push -f origin deploy &&\

echo "deploy end"
