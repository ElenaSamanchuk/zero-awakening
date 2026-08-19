#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="zero-awakening"
GITHUB_USER="${GITHUB_USER:-ElenaSamanchuk}"

if ! command -v gh >/dev/null; then
  echo "Установите GitHub CLI: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Сначала авторизуйтесь: gh auth login"
  exit 1
fi

gh repo create "${GITHUB_USER}/${REPO_NAME}" \
  --public \
  --description "ZERO // Пробуждение — креативный лендинг ивента и персонажа" \
  --source=. \
  --remote=github \
  --push

echo ""
echo "✓ Репозиторий Projects создан и код запушен"
echo "✓ GitHub Actions задеплоит сайт автоматически"
echo ""
echo "Ссылка (через 1–2 мин):"
echo "https://${GITHUB_USER,,}.github.io/${REPO_NAME}/"
