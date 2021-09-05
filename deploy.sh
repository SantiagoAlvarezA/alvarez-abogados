#!/usr/bin/env sh

set -e

npm run build


cd dist

git init
git add -A
git commit -m "new Deploy"
git push -f git@github.com:SantiagoAlvarezA/alvarez-abogados.git master:gh-pages

cd -