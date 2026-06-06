# API Reference

Base URL: `http://localhost:4000`

Authentication notes
- Endpoints under `/directory` and `/file` are protected by the `checkAuth` middleware and require an authenticated cookie/session.
- `/user` and `/auth` provide registration/login flows.

## Auth Routes (`/auth`)
- POST `/auth/send-otp` — Send OTP to email. Body: `{ "email": "you@example.com" }`
- POST `/auth/verify-otp` — Verify OTP and sign-in a user. Body: `{ "email": "you@example.com", "otp": "123456" }`
- POST `/auth/google` — Login/Register with Google. Body: `{ "idToken": "<google-id-token>" }`

## User Routes (`/user`)
- POST `/user/register` — Register with `{ name, email, password }`
- POST `/user/login` — Login with `{ email, password }`
- GET `/user` — Get current user (requires cookie auth)
- POST `/user/logout` — Logout current session
- POST `/user/logout-all` — Logout all sessions for the user

## Directory Routes (`/directory`)
- GET `/directory/:id?` — Get directory contents or a specific directory
- POST `/directory/:parentDirId?` — Create directory under `parentDirId` (optional)
- PATCH `/directory/:id` — Rename directory
- DELETE `/directory/:id` — Delete directory

## File Routes (`/file`)
- POST `/file/:parentDirId?` — Upload a file (multipart/form-data expected)
- GET `/file/:id` — Download or retrieve a file metadata
- PATCH `/file/:id` — Rename file
- DELETE `/file/:id` — Delete file


For request/response examples, see `docs/USAGE.md`.