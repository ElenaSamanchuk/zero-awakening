# ZERO // Пробуждение

Креативный лендинг для **ивента** и **продвижения персонажа** — в духе [bloggerconf.ru](https://bloggerconf.ru) и [gca.studio](https://gca.studio/en/).

## Запуск

```bash
npm install
npm run dev -- -p 3456
```

Откройте [http://localhost:3456](http://localhost:3456).

## Фичи

- Preloader, кастомный курсор, scroll-story лора
- AI-арт персонажа ZERO, карточки стримеров
- Программа по залам, портфолио-карусель, таймер
- Параллакс hero, HUD-карточка персонажа

## Контент

`src/lib/content.ts` — персонаж, стримеры, расписание, лор.

## GitHub Pages (опционально)

```bash
GITHUB_PAGES=true npm run build
```

Деплой через `.github/workflows/deploy-pages.yml`.
