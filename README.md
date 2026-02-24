# LeadProGroup

Веб-приложение — каталог игр с фильтрацией по тегам, сортировкой и бесконечной прокруткой. Построено на **React 19**, **Vite 7**, **TypeScript** и **Tailwind CSS** по методологии **Feature-Sliced Design (FSD)**.

## Стек

- **React** 19
- **Vite** 7
- **TypeScript** 5.9
- **Tailwind CSS** 4
- **ESLint** + **Prettier**

## Требования

- Node.js 20+
- npm

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка
npm run build

# Превью собранного приложения
npm run preview
```

## Скрипты

| Команда       | Описание                    |
|---------------|-----------------------------|
| `npm run dev` | Запуск dev-сервера (Vite)   |
| `npm run build` | Сборка для production    |
| `npm run preview` | Локальный просмотр сборки |
| `npm run lint` | Проверка ESLint            |
| `npm run lint:fix` | Исправление по ESLint   |
| `npm run format` | Форматирование Prettier  |

## Деплой

Сборка публикуется на **GitHub Pages** при пуше в ветку `main` (workflow: `.github/workflows/deploy-pages.yml`). Для корректных путей используется `base` в Vite, зависящий от `GITHUB_PAGES` и имени репозитория.

## Структура проекта

Проект организован по [FSD](https://feature-sliced.design/). Подробное описание слоёв и файлов — в [STRUCTURE.md](./STRUCTURE.md).

- **app** — инициализация приложения, корневой `App`
- **pages** — страницы (например, каталог игр)
- **widgets** — шапка, сайдбар, хлебные крошки, панель фильтров
- **features** — фильтр по тегам, сортировка игр
- **entities** — сущность «игра», карточка игры
- **shared** — UI-компоненты, утилиты, ассеты, типы

## Лицензия

Приватный проект.
