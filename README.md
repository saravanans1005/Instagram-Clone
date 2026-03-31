# Instagram Clone

React + Vite app with mock API via JSON Server.

## Features
- Feed with Stories placeholder + Posts (fetches /posts)
- Sidebar navigation
- Profile switcher + Suggestions list (fetches /profile, /suggestions)
- Responsive layout, Bootstrap Icons

## Setup & Run

```bash
cd Instagram
npm install
```

### Development
- **Backend API:** `npm run server` (JSON Server on http://localhost:3000)
- **Frontend:** `npm run dev` (Vite on http://localhost:5173)
- **Both:** `npm run dev:full`

API endpoints proxied via /api (no CORS issues).

**db/db.json** editable for mock data.

## Endpoints
- GET /posts
- GET /profile
- GET /suggestions

## Tech
- React 19, Vite 8
- Bootstrap CSS (index.css), Bootstrap Icons
- json-server for REST API
