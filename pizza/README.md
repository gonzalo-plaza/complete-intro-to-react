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
pnpm build:prod

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
│   ├── routes/          # Application routes
│   ├── api/             # API call functions
│   ├── contexts/        # React contexts
│   └── components/      # Reusable components
├── dist/                # Production build (generated)
├── index.html           # Main HTML
└── vite.config.js       # Vite configuration
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

Styles are served from the backend at `/public/style.css`. During the build, Vite will show an informational warning about this file, but this is expected behavior since the CSS is resolved at runtime from the server.

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

- Vite proxy redirects `/api/*` and `/public/*` to the backend in development
- In production, the frontend is served from the same Fastify server
- React Compiler is enabled for automatic optimizations
