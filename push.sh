#!/bin/bash

# Script per push automatico su GitHub
# Uso: ./push.sh "messaggio commit" oppure ./push.sh (usa messaggio default)

MESSAGE="${1:-Auto update $(date '+%Y-%m-%d %H:%M:%S')}"

git add .
git commit -m "$MESSAGE"
git push

echo "✅ Push completato!"
