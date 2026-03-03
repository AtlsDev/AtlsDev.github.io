# synthia-nuxt

Production-ready Nuxt 4 starter template with Nuxt UI. Clean, minimal, and ready to build on.

---

## Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | Nuxt 4                                    |
| UI Library | Nuxt UI 4                                 |
| Styling    | Tailwind CSS 4                            |
| State      | Pinia                                     |
| Router     | Vue Router (via Nuxt)                     |
| i18n       | @nuxtjs/i18n 10 (JSON)                    |
| Testing    | Vitest + @nuxt/test-utils                 |
| Linting    | ESLint (antfu config)                     |

---

## Features

- **Auto Import** — Vue, Nuxt, Pinia, and i18n composables are available without writing `import`
- **Nuxt UI Auto Import** — All Nuxt UI components are automatically registered
- **Layout System** — `default` layout ready to extend
- **Theming** — Custom color palette (emerald / rose / zinc), dark mode support via Nuxt UI
- **i18n** — JSON-based multi-language setup, `en` and `tr` locales included
- **Nuxt DevTools** — Enabled out of the box for a better dev experience
- **Type Safe** — TypeScript with full type checking

---

## Getting Started

```sh
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production build
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview

# Run tests
pnpm test

# Lint
pnpm lint

# Lint + auto-fix
pnpm lint:fix
```

---

## Directory Structure

```text
app/
├── assets/css/       # Global styles
├── components/       # Shared components (auto-imported)
├── composables/      # Composables (auto-imported)
├── layouts/          # default.vue
├── pages/            # Page components (file-based routing)
├── stores/           # Pinia stores (auto-imported)
└── utils/            # Utility functions (auto-imported)
i18n/
└── locales/
    ├── en.json       # English locale
    └── tr.json       # Turkish locale
```

---

## IDE

**VS Code** + **[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** extension is recommended.

**Nuxt DevTools** is enabled by default and accessible in the browser during development.

---

## Author

Built by **[atlaxt](https://github.com/atlaxt)**
