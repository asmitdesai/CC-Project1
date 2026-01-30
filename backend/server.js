require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const musicRoutes = require('./routes/musicRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Auth routes: POST /api/auth/signup, POST /api/auth/login
app.use('/api/auth', authRoutes);
// Music route: GET /api/music/:mood (protected)
app.use('/api/music', musicRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();
