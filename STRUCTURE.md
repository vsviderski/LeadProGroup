# Файловая структура проекта (FSD)

```
src/
├── app/                    # Инициализация приложения
│   └── index.tsx           # Корневой компонент App
│
├── pages/                  # Страницы (композиция виджетов + свой UI)
│   └── games/
│       ├── GamesPage.tsx   # Страница «Игры»: Layout, состояние, контент
│       ├── ui/
│       │   └── ContentGrid.tsx  # Сетка карточек игр (только для этой страницы)
│       └── index.ts
│
├── widgets/                # Крупные блоки страницы
│   ├── header/
│   │   ├── Header.tsx      # Шапка: логотип, поиск, кнопки Вход/Регистрация
│   │   └── index.ts
│   ├── sidebar/
│   │   ├── Sidebar.tsx     # Боковая панель
│   │   ├── model/          # Навигация (перенесено из фичи sidebar-nav)
│   │   │   ├── types.ts    # NavItem
│   │   │   └── constants.ts# DEFAULT_NAV_ITEMS
│   │   ├── ui/NavList.tsx
│   │   └── index.ts
│   ├── breadcrumbs/
│   │   ├── Breadcrumbs.tsx # Хлебные крошки (Главная / игры)
│   │   └── index.ts
│   └── filter-bar/
│       ├── FilterBar.tsx   # Заголовок «Игры» + сортировка + иконка фильтра
│       └── index.ts
│
├── features/               # Интерактивные сценарии
│   ├── filter-by-tag/
│   │   ├── model/
│   │   │   ├── types.ts     # TagItem
│   │   │   └── constants.ts # DEFAULT_TAGS
│   │   ├── ui/TagBar/
│   │   │   └── TagBar.tsx
│   │   └── index.ts
│   ├── sort-games/
│   │   ├── model/types.ts   # SortState, SortField, SortOrder
│   │   ├── ui/SortSelects/
│   │   │   └── SortSelects.tsx
│   │   └── index.ts
│   └── search/
│       ├── ui/SearchField/
│       │   └── SearchField.tsx
│       └── index.ts
│
├── entities/               # Сущности и их отображение
│   └── game/
│       ├── model/types.ts   # Интерфейс Game
│       ├── ui/GameCard/
│       │   └── GameCard.tsx
│       └── index.ts         # единственный index в сущности
│
└── shared/                 # Переиспользуемые ресурсы
    ├── lib/
    │   ├── index.ts        # cn(), useInfiniteScroll
    │   └── useInfiniteScroll.ts
    ├── ui/
    │   ├── Layout/Layout.tsx   # Общий layout: фон, header, sidebar, main(children)
    │   ├── Button/Button.tsx
    │   ├── Tag/Tag.tsx
    │   ├── InputSearch/InputSearch.tsx
    │   ├── Select/Select.tsx
    │   ├── Logo/Logo.tsx
    │   ├── Icon/Icon.tsx
    │   ├── Separator/Separator.tsx
    │   ├── Loader/Loader.tsx
    │   └── index.ts
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
