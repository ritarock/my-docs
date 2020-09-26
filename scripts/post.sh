#!/bin/sh

now=`date +%Y%m%d%H%M%S`
cat <<EOF > ./content/articles/${now}.md
---
titile:
date: ${now}
tags: []
---
EOF
