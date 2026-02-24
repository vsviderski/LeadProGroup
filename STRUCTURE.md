# Файловая структура проекта (FSD)

```
src/
├── app/                    # Инициализация приложения
│   └── index.tsx           # Корневой компонент App
│
├── pages/                  # Страницы (композиция виджетов + свой UI)
│   └── games/
│       ├── ui/
│       │   ├── GamesPage.tsx      # Страница «Игры»: состояние, контент
│       │   └── ContentGrid/
│       │       └── ContentGrid.tsx # Сетка карточек игр (только для этой страницы)
│       ├── hooks/
│       │   └── useGamesList.ts    # Загрузка и состояние списка игр (фильтр, сортировка, пагинация)
│       └── index.ts
│
├── widgets/                # Крупные блоки страницы
│   ├── header/
│   │   ├── ui/
│   │   │   ├── Header.tsx         # Шапка: логотип, поиск, кнопки Вход/Регистрация
│   │   │   ├── Logo/
│   │   │   │   ├── Logo.tsx
│   │   │   │   ├── LogoIcon.tsx
│   │   │   │   └── LogoText.tsx
│   │   │   └── SearchField/
│   │   │       └── SearchField.tsx
│   │   └── index.ts
│   ├── sidebar/
│   │   ├── model/
│   │   │   ├── types.ts           # NavItem
│   │   │   ├── constants.ts       # DEFAULT_NAV_ITEMS
│   │   │   └── useSidebarState.ts # Состояние открытия сайдбара и навигации
│   │   ├── ui/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── NavList.tsx
│   │   │   └── SidebarFooter.tsx
│   │   └── index.ts
│   ├── breadcrumbs/
│   │   ├── Breadcrumbs.tsx        # Хлебные крошки (Главная / игры)
│   │   └── index.ts
│   └── filter-bar/
│       ├── FilterBar.tsx          # Заголовок «Игры» + сортировка + иконка фильтра
│       └── index.ts
│
├── features/               # Интерактивные сценарии
│   ├── filter-by-tag/
│   │   ├── model/
│   │   │   ├── types/
│   │   │   │   └── types.ts       # TagItem
│   │   │   ├── consts/
│   │   │   │   └── consts.tsx    # DEFAULT_TAGS
│   │   │   ├── context/
│   │   │   │   └── TagFilterContext.tsx
│   │   │   └── helpers/
│   │   │       └── filterByTagId.ts
│   │   ├── ui/TagBar/
│   │   │   └── TagBar.tsx
│   │   └── index.ts
│   ├── sort-games/
│   │   ├── model/
│   │   │   ├── types/
│   │   │   │   └── types.ts       # SortState, SortField, SortOrder
│   │   │   └── context/
│   │   │       └── SortStateContext.tsx
│   │   ├── ui/SortSelects/
│   │   │   └── SortSelects.tsx
│   │   └── index.ts
│
├── entities/               # Сущности и их отображение
│   └── game/
│       ├── model/
│       │   ├── types/
│       │   │   └── types.ts       # Интерфейс Game
│       │   └── mocks/
│       │       └── games.ts      # Мок-данные игр
│       ├── ui/GameCard/
│       │   └── GameCard.tsx
│       └── index.ts
│
└── shared/                 # Переиспользуемые ресурсы
    ├── lib/
    │   ├── index.ts              # cn(), useInfiniteScroll
    │   └── useInfiniteScroll.ts
    ├── ui/
    │   ├── Layout/Layout.tsx     # Общий layout: фон, header, sidebar, main(children)
    │   ├── Button/Button.tsx
    │   ├── Tag/Tag.tsx
    │   ├── InputSearch/InputSearch.tsx
    │   ├── Select/Select.tsx
    │   ├── Icon/Icon.tsx
    │   ├── Separator/Separator.tsx
    │   ├── Loader/Loader.tsx
    │   └── index.ts
    ├── assets/
    │   ├── images/               # Изображения (в т.ч. превью игр)
    │   └── icons/                # SVG-иконки (React-компоненты)
    ├── types/
    │   └── icon.ts
    └── index.ts
```

**Правило:** в каждом слайсе (фича, сущность, виджет, страница, shared) — только один `index.ts` в корне. Во вложенных папках `ui/`, `model/` и т.п. файлов `index.ts` нет; импорты идут из корня слайса.

## Алиасы (tsconfig.app.json)

- `@app/*` → `./src/app/*`
- `@pages/*` → `./src/pages/*`
- `@widgets/*` → `./src/widgets/*`
- `@features/*` → `./src/features/*`
- `@entities/*` → `./src/entities/*`
- `@shared/*` → `./src/shared/*`
- `@/*` → `./src/*`

## Зависимости слоёв

- **app** → pages
- **pages** → widgets, features, entities
- **widgets** → features, entities, shared
- **features** → entities, shared
- **entities** → shared
- **shared** — без внутренних зависимостей от других слоёв
