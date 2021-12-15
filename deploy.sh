#!/bin/bash

git add . &&\
git stash &&\
yarn build &&\
git checkout deploy &&\
rm -rf docs &&\
mv dist/ docs/ &&\
git add . &&\
git commit -m deploy &&\
git push origin deploy &&\
git checkout main &&\
git stash pop &&\
open https://ikmiyabi.github.io/knowledge
