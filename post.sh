#!/bin/sh

DATETIME=`date +%Y%m%d%H%M%S`
echo create ./docs/"${DATETIME}".md
cat <<EOF > ./docs/"${DATETIME}".md
---
title:
date: $DATETIME
tags: ['']
---
