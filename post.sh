#!/bin/sh

DATETIME=`date +%Y%m%d%H%M%S`

cat <<EOF > ./articles/"${DATETIME}".md
---
title:
date: $DATETIME
tags: []
---
EOF