#!/bin/bash

echo "deploy start"

yarn build &&\
git config --global user.email "ikmiyabi@yahoo.co.jp" &&\
git config --global user.name "circleci" &&\
git checkout deploy &&\
rm -rf docs &&\
mv dist/ docs/ &&\
git add -A &&\
git commit -m "[ci skip] deploy" &&\
git push -f origin deploy &&\

echo "deploy end"
