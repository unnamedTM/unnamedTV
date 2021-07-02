#!/bin/bash

git pull origin master
git add .
git commit -m "x"
git push origin master
vercel --prod
