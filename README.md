# MoodTunes

## Setup

### Local MongoDB (recommended for dev)

1. Install MongoDB Community: https://www.mongodb.com/docs/manual/installation/
2. Start MongoDB:
   - **macOS (Homebrew):** `brew services start mongodb-community`
   - **macOS (manual):** `mongod --config /usr/local/etc/mongod.conf` (or your config path)
   - **Windows:** Run MongoDB as a service or `mongod` from the install directory
3. In `moodtunes/backend/.env` set:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/moodtunes
   ```
   (Using `127.0.0.1` instead of `localhost` can avoid connection issues on some systems.)

### Backend

1. `cd moodtunes/backend`
2. `cp .env.example .env`
3. Edit `.env`: set `MONGODB_URI` (see above for local), `PORT` (optional), `JWT_SECRET`
4. `npm install`
5. `npm start` (runs on PORT from .env or 5000)

### Frontend

1. `cd moodtunes/frontend`
2. `npm install`
3. `npm run dev` (runs on port 5173, proxies /api to backend)

### Run the app

Open http://localhost:5173 and sign up / log in.
