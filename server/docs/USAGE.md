# Usage Examples

Replace `http://localhost:4000` with your server URL.

## Register

```bash
curl -X POST http://localhost:4000/user/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","password":"pass123"}'
```

## Login (email/password)

```bash
curl -X POST http://localhost:4000/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"pass123"}'
```

## Send OTP

```bash
curl -X POST http://localhost:4000/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com"}'
```

## Verify OTP

```bash
curl -X POST http://localhost:4000/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","otp":"123456"}'
```

## Login with Google (client obtains `idToken` and passes it to server)

```bash
curl -X POST http://localhost:4000/auth/google \
  -H "Content-Type: application/json" \
  -d '{"idToken":"<GOOGLE_ID_TOKEN>"}'
```

## Create directory (requires cookie auth)

```bash
curl -X POST http://localhost:4000/directory \
  -H "Content-Type: application/json" \
  -d '{"name":"MyFolder"}' \
  --cookie "connect.sid=<session-cookie-here>"
```

## Upload file (example using `curl` with multipart)

```bash
curl -X POST http://localhost:4000/file \
  -F "file=@/path/to/localfile.pdf" \
  -F "parentDirId=<parentDirId>" \
  --cookie "connect.sid=<session-cookie-here>"
```

Adjust cookies/headers according to how your client stores the session cookie.