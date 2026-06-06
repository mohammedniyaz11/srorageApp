# Google Login (ID token verification)

This project supports signing in with Google by verifying ID tokens issued by Google's OAuth2 flow.

Current implementation
- `services/googleAuthService.js` uses `google-auth-library` and verifies an `idToken` using a hard-coded client id.
- The auth route `/auth/google` expects a POST body: `{ "idToken": "<id-token-from-client>" }`.

How to obtain an ID token from the client
- On the frontend, use Google Identity Services or the Google Sign-In SDK to obtain an `id_token` after the user authenticates.
- Send the `id_token` to the server via `/auth/google`.

Recommended server-side changes
1. Create OAuth credentials in Google Cloud Console (OAuth 2.0 Client IDs — Web application).
2. Replace the hard-coded client id in `services/googleAuthService.js` with `process.env.GOOGLE_CLIENT_ID`.
3. Optionally store `GOOGLE_CLIENT_SECRET` in env if you later implement OAuth server-side flows.

Example: update `services/googleAuthService.js`

```js
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export async function verifyIdToken(idToken) {
  const ticket = await client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID });
  return ticket.getPayload();
}
```

Security notes
- Always verify the `aud`/`audience` field matches your client id.
- Validate the `email_verified` claim before creating/auto-registering users.
- Do not rely solely on client-side checks; always verify tokens server-side as done here.

If you'd like, I can update `googleAuthService.js` to read from env and add a `.env.example`.