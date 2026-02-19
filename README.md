# 🛍️ Product App — Frontend

## Live Website

🌐 [https://product-app-frontend-vb4p.onrender.com](https://product-app-frontend-vb4p.onrender.com)

---

## Features

- ✅ Product listing with search & filter
- ✅ Responsive product card UI
- ✅ Add to cart / favorite
- ✅ User authentication (register/login)
- ✅ Full CRUD REST API
- ✅ Loading skeletons & error handling

---

## Stack

- **Frontend**: React + Vite + TypeScript + Tailwind CSS

---

## Authentication (EXTRA)

### Register
Create a new account at `/register`:

| Field    | Type   | Required | Notes              |
|----------|--------|----------|--------------------|
| Name     | string | ✅       | Full name          |
| Email    | string | ✅       | Valid email format |
| Password | string | ✅       | Min. 6 characters  |

### Login
Sign in to your account at `/login`:

| Field    | Type   | Required |
|----------|--------|----------|
| Email    | string | ✅       |
| Password | string | ✅       |

> After login, a JWT token is stored locally and automatically attached to protected API requests.

---

## Getting Started

```bash
cd frontend
npm install
npm run dev 
```

---

## Project Structure

```
frontend/src/
├── api/            # Axios API calls
├── components/     # Reusable UI components
├── context/        # Auth & Cart context
├── hooks/          # Custom React hooks
├── pages/          # Route pages
└── types/          # TypeScript types
```