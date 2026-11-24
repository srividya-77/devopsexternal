# devopsexternal

A minimal registration API with a static frontend.

## What it does

The Express server exposes two endpoints:

- `POST /api/register` — accepts a JSON body and pushes it into an in-memory array, then returns the submitted data
- `GET /api/users` — returns all registered users collected so far

The `public/` folder is served as static files and likely contains the registration form HTML.

> **Note:** User data is stored only in memory. It is lost when the server restarts. A `users.json` file exists in the project root but the server code does not read from or write to it.

## Built with

- Node.js + Express

## How to run

```bash
cd devopsexternal/registration-app
npm install
npm start
# Server runs at http://localhost:3000
```
