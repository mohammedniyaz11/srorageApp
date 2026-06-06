# Environment & Configuration

This project currently includes a few hard-coded values (port, cookie secret, Google client ID). For production or flexible development setups, extract these to environment variables.

Recommended environment variables

- `PORT` — port for the server (default: `4000`)
- `MONGO_URI` — MongoDB connection string (e.g. `mongodb://localhost:27017/storage-app`)
- `COOKIE_SECRET` — secret used by `cookie-parser` to sign cookies
- `JWT_SECRET` — (optional) secret for JWTs if you add JWT-based auth
- `GOOGLE_CLIENT_ID` — Google OAuth client ID (replace the hard-coded value in `services/googleAuthService.js`)
- `GOOGLE_CLIENT_SECRET` — Google OAuth client secret (if you implement server-side OAuth flows)

How to use
1. Install `dotenv`:

```bash
npm install dotenv
```

2. Create a `.env` file in the project root and add variables:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/storage-app
COOKIE_SECRET=your_cookie_secret_here
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. Load env values in `app.js` or a new `config` module before other imports:

```js
import dotenv from 'dotenv';
dotenv.config();
```

Notes about current code
- `app.js` currently uses a hard-coded cookie secret (`ProCodrr-storageApp-123$#`) and port `4000`.
- `services/googleAuthService.js` contains a hard-coded Google client id constant. Replace it with `process.env.GOOGLE_CLIENT_ID` when you create the `.env` and load it.

If you want, I can add `.env.example` and modify the code to use `dotenv` and `process.env` values.