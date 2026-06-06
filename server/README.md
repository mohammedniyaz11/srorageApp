# Storage App (Server)

A simple Node.js + Express server for a file storage app with user authentication (OTP + Google login), directory and file management backed by MongoDB.

## Features
- User registration and login (OTP & Google sign-in)
- Directory and file CRUD operations
- Cookie-based session handling

## Quick Start
1. Install dependencies

```bash
npm install
```

2. Start the server in development

```bash
npm run dev
```

By default the server listens on port `4000`.

## Project Structure
- `app.js` — application entrypoint and route wiring
- `routes/` — express routes (`/auth`, `/user`, `/file`, `/directory`)
- `controllers/` — route handlers
- `models/` — Mongoose models for users, files, directories, sessions, OTPs
- `services/` — helper services (Google auth, email/OTP)
- `config/` — DB setup and validations

## API Docs
See the detailed API documentation in the `docs/` folder: [API Reference](docs/API.md)

## Environment & Configuration
This repository currently uses some hard-coded defaults (port, cookie secret, Google client id). See `docs/ENV.md` for recommended environment variables and where to change them: [Environment](docs/ENV.md)

## Google Login
The Google client ID is currently hard-coded in `services/googleAuthService.js`. See `docs/GOOGLE_AUTH.md` for steps to create OAuth credentials and how to update the service.

## Contributing
If you plan to extend the project:
- Extract configuration values to environment variables (use `dotenv`)
- Replace hard-coded secrets (cookie secret, Google client id) with env vars
- Add tests and a lint/prettier setup

---

If you want, I can also: create a `.env.example`, wire `dotenv`, or update `googleAuthService.js` to read from env vars. Which should I do next?