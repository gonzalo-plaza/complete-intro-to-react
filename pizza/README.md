# Pizza - Frontend

Frontend application for "Padre Gino's" pizzeria built with React 19, Vite, TanStack Router, and React Query.

## 🚀 Quick Start

### Development

```bash
# From the monorepo root
pnpm dev:pizza

# Or from this directory
pnpm dev
```

The development server will run on `http://localhost:5173` (Vite's default port).

### Production Build

```bash
# From the monorepo root
pnpm build:pizza

# Or from this directory
pnpm build
```

The build will be generated in the `dist/` folder.

## 🛠️ Technologies

- **React 19** - UI library with React Compiler
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing
- **TanStack React Query** - Server state management and caching
- **Vitest** - Testing framework
- **Testing Library** - Utilities for React testing

## 📁 Structure

```
pizza/
├── src/
│   ├── routes/          # Application routes (TanStack Router)
│   ├── api/             # API call functions
│   ├── contexts/        # React contexts
│   ├── components/       # Reusable components
│   ├── __tests__/       # Test files
│   ├── App.jsx          # Main app component
│   ├── routeTree.gen.ts # Generated route tree
│   └── ...              # Other source files
├── public/              # Static files
│   ├── style.css        # Application styles
│   ├── pizzas/          # Pizza images
│   ├── padre_gino.svg   # Logo
│   └── Pacifico-Regular.ttf # Font
├── dist/                # Production build (generated)
├── coverage/            # Test coverage (generated)
├── index.html           # Main HTML
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
├── eslint.config.mjs    # ESLint configuration
├── vitest.workspace.js  # Vitest configuration
└── package.json         # Dependencies
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds for production |
| `pnpm preview` | Previews the production build |
| `pnpm test` | Runs tests |
| `pnpm test:ui` | Runs tests with UI |
| `pnpm coverage` | Generates coverage report |
| `pnpm lint` | Runs the linter |
| `pnpm format` | Formats code with Prettier |

## 🎨 Styles

Styles are located in `public/style.css` and served by the frontend application. The CSS is bundled and served as a static asset.

## 🔌 API

The frontend communicates with the backend through:

- `/api/pizzas` - List of available pizzas
- `/api/pizza-of-the-day` - Pizza of the day
- `/api/order` - Create an order
- `/api/past-orders` - Past orders
- `/api/contact` - Contact form

## 🧪 Testing

```bash
# Run tests
pnpm test

# Tests with interactive UI
pnpm test:ui

# Code coverage
pnpm coverage
```

## 📝 Notes

- The frontend is deployed on Vercel and makes API calls to the backend (deployed on Render)
- React Compiler is enabled for automatic optimizations
- Devtools (TanStack Router and React Query) are only shown in development mode
