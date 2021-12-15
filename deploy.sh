#!/bin/bash

echo "deploy start"

yarn build &&\
git checkout deploy &&\
mv .gitignore.deploy .gitignore &&\
rm -rf docs &&\
mv dist/ docs/ &&\
git add -A &&\
git commit -m "[ci skip] deploy" &&\
git push -f origin deploy &&\

echo "deploy end"
