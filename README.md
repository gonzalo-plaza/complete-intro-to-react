# Complete Intro to React v9

![Frontend Masters](https://static.frontendmasters.com/assets/fm-logo.svg)

This project is a monorepo developed following the [**Complete Intro to React v9**](https://frontendmasters.com/courses/complete-react-v9/) course from [Frontend Masters](https://frontendmasters.com/).

## 📚 About the Course

This project is part of learning the **Complete Intro to React v9** course taught by Frontend Masters, a leading platform in web and frontend development education.

## 🏗️ Project Structure

This is a monorepo managed with **pnpm workspaces** that contains:

- **`pizza/`** - Frontend application built with React 19, Vite, TanStack Router, and React Query
- **`api/`** - Backend server developed with Fastify and SQLite

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (version 10.8.0 or higher)

### Installation

```bash
# Clone the repository
git clone <your-repository>
cd complete-intro-to-react

# Install dependencies
pnpm install
```

### Development

```bash
# Run both projects (frontend + backend)
pnpm dev

# Frontend only
pnpm dev:pizza

# Backend only
pnpm dev:api
```

### Production

```bash
# Build and run in production mode
pnpm start:prod

# Or build and run separately
pnpm build:prod
pnpm start:api
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Runs frontend and backend in development mode |
| `pnpm dev:pizza` | Runs frontend only |
| `pnpm dev:api` | Runs backend only |
| `pnpm build:prod` | Builds frontend for production |
| `pnpm start:prod` | Builds and runs in production mode |
| `pnpm start:api` | Starts the backend server |
| `pnpm test:pizza` | Runs frontend tests |
| `pnpm lint:pizza` | Runs the linter |
| `pnpm format:pizza` | Formats the code |

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TanStack Router** - Routing
- **TanStack React Query** - Server state management
- **Vitest** - Testing framework

### Backend
- **Fastify** - Fast web framework
- **SQLite** - Database
- **Node.js** - JavaScript runtime

## 📁 Monorepo Structure

```
complete-intro-to-react/
├── api/                 # Backend with Fastify
│   ├── server.js        # Main server
│   ├── public/          # Static files (CSS, images)
│   └── pizza.sqlite     # SQLite database
├── pizza/               # Frontend with React
│   ├── src/             # Source code
│   ├── dist/             # Production build (generated)
│   └── vite.config.js    # Vite configuration
├── package.json          # Monorepo configuration
└── pnpm-workspace.yaml   # Workspaces configuration
```

## 🎯 Project Features

- ✅ Monorepo with pnpm workspaces
- ✅ Frontend and backend on the same domain
- ✅ CSS served from the backend
- ✅ SQLite database
- ✅ Routing with TanStack Router
- ✅ Server state with React Query
- ✅ Testing with Vitest

## 📝 Notes

- The CSS (`style.css`) is served from the backend at `/public/style.css`
- The SQLite database is located at `api/pizza.sqlite`
- The built frontend is served from the same Fastify server

## 🔗 Links

- [Course: Complete Intro to React v9](https://frontendmasters.com/courses/complete-react-v9/)
- [Frontend Masters](https://frontendmasters.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Fastify Documentation](https://www.fastify.io/)

## 📄 License

ISC

---

*Developed following the [Frontend Masters](https://frontendmasters.com/) course*
