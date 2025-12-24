# API - Backend

Backend server for "Padre Gino's" pizzeria developed with Fastify and SQLite.

## 🚀 Quick Start

### Development

```bash
# From the monorepo root
pnpm dev:api

# Or from this directory
pnpm dev
```

The server will run on `http://localhost:3000` (or the port defined in `PORT`).

### Production

```bash
# From the monorepo root
pnpm start:api

# Or from this directory
pnpm start
```

## 🛠️ Technologies

- **Fastify** - Fast and efficient web framework
- **SQLite** - Embedded database
- **promised-sqlite3** - Promise wrapper for SQLite
- **@fastify/static** - Plugin for serving static files

## 📁 Structure

```
api/
├── server.js           # Main server
├── public/             # Static files
│   ├── style.css       # Application styles
│   └── pizzas/         # Pizza images
├── pizza.sqlite        # SQLite database
└── package.json        # Dependencies
```

## 🔌 API Endpoints

### GET `/api/pizzas`
Gets the complete list of available pizzas with their sizes and prices.

**Response:**
```json
[
  {
    "id": "pepperoni",
    "name": "Pepperoni",
    "category": "Classic",
    "description": "Pepperoni, mozzarella",
    "image": "/public/pizzas/pepperoni.webp",
    "sizes": {
      "S": 10.99,
      "M": 12.99,
      "L": 14.99
    }
  }
]
```

### GET `/api/pizza-of-the-day`
Gets the pizza of the day (changes daily).

### GET `/api/orders`
Gets all orders.

### GET `/api/order?id={orderId}`
Gets details of a specific order.

### POST `/api/order`
Creates a new order.

**Body:**
```json
{
  "cart": [
    {
      "pizza": { "id": "pepperoni" },
      "size": "M",
      "price": "$12.99"
    }
  ]
}
```

### GET `/api/past-orders?page={page}`
Gets past orders with pagination.

### GET `/api/past-order/:order_id`
Gets details of a past order.

### POST `/api/contact`
Sends a contact message.

**Body:**
```json
{
  "name": "John",
  "email": "john@example.com",
  "message": "Contact message"
}
```

## 📦 Static Files

The server serves static files from `/public/`:

- `/public/style.css` - Application styles
- `/public/pizzas/*.webp` - Pizza images

## 🗄️ Database

The SQLite database (`pizza.sqlite`) contains the following tables:

- `pizza_types` - Available pizza types
- `pizzas` - Pizzas with their sizes and prices
- `orders` - Placed orders
- `order_details` - Details of each order

## 🔧 Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)

### Serving Frontend

In production, the server also serves the built frontend from `../pizza/dist/`. Routes that are not `/api/*` or `/public/*` will serve the frontend's `index.html` to support SPA routing.

## 📝 Notes

- The server uses SQLite transactions to ensure order integrity
- Logs are displayed with `pino-pretty` in development
- CSS is served from the backend to maintain a learning approach
