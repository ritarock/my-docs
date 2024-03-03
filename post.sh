#!/bin/sh

DATETIME=`date +%Y%m%d%H%M%S`
echo create ./_docs/"${DATETIME}".md
cat <<EOF > ./_docs/"${DATETIME}".md
---
title:
date: $DATETIME
tags: ['']
---
