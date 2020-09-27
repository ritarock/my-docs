#!/bin/sh

now=`date +%Y%m%d%H%M%S`
cat <<EOF > ./content/articles/${now}.md
---
title:
date: ${now}
tags: []
---
EOF
