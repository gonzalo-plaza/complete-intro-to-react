# Complete Intro to React v9

<img src="images/frontendmasters_logo.svg" alt="Frontend Masters" width="400" />

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
# Build frontend for production
pnpm build:pizza

# Start backend server
pnpm start:api
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Runs frontend and backend in development mode |
| `pnpm dev:pizza` | Runs frontend only |
| `pnpm dev:api` | Runs backend only |
| `pnpm build:pizza` | Builds frontend for production |
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
├── api/                      # Backend with Fastify
│   ├── server.js             # Main server
│   ├── pizza.sqlite          # SQLite database
│   ├── package.json          # API dependencies
│   └── pnpm-workspace.yaml   # Workspace config
├── pizza/                    # Frontend with React
│   ├── src/                  # Source code
│   │   ├── routes/           # Application routes
│   │   ├── api/              # API call functions
│   │   ├── contexts/         # React contexts
│   │   ├── components/       # Reusable components
│   │   └── __tests__/        # Test files
│   ├── public/               # Static files (CSS, images, fonts)
│   │   ├── style.css         # Application styles
│   │   ├── pizzas/           # Pizza images
│   │   └── padre_gino.svg    # Logo
│   ├── dist/                 # Production build (generated)
│   ├── coverage/             # Test coverage (generated)
│   ├── index.html            # Main HTML
│   ├── vite.config.js        # Vite configuration
│   ├── vercel.json           # Vercel deployment config
│   ├── eslint.config.mjs     # ESLint configuration
│   ├── vitest.workspace.js   # Vitest configuration
│   └── package.json          # Frontend dependencies
├── images/                   # Project images
├── package.json              # Monorepo configuration
└── pnpm-workspace.yaml       # Workspaces configuration
```

## 🎯 Project Features

- ✅ Monorepo with pnpm workspaces
- ✅ Frontend and backend deployed separately
- ✅ SQLite database
- ✅ Routing with TanStack Router
- ✅ Server state with React Query
- ✅ Testing with Vitest
- ✅ Separate deployment (Vercel + Render)

## 📝 Notes

- Static files (CSS, images) are located in `pizza/public/` and served by the frontend
- The SQLite database is located at `api/pizza.sqlite`
- Frontend and backend are deployed separately:
  - Frontend: Vercel
  - Backend: Render

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
