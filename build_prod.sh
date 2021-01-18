#!/bin/bash
ng build --prod
cp ../docs/index.html ../docs/404.html 
touch ../docs/CNAME
echo "panchoruy.com" >> ../docs/CNAME