#!/bin/sh

TIMESTAMP=$(date +"%Y%m%d%H%M%S")
PUBDATE=$(date +"%Y-%m-%dT%H:%M:%S")
FILE="src/content/docs/${TIMESTAMP}.md"

cat >"$FILE" <<EOF
---
title: "TITLE"
pubDate: ${PUBDATE}
tags: ["tag1", "tag2"]
---
EOF

echo "created: $FILE"
