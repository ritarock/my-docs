#!/bin/sh

DATETIME=`date +%Y%m%d%H%M%S`

cat <<EOF > ./docs/"${DATETIME}".md
---
title:
date: $DATETIME
tags: ['']
---
