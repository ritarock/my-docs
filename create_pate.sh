#!/bin/sh
DATETIME=`date +%Y%m%d%H%M%S`

cat <<EOF > ./content/articles/"${DATETIME}".md
---
title: 
date: $DATETIME
tags: []
---
EOF