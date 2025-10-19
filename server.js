const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware for JSON parsing
app.use(express.json());

// Bonus: Custom middleware to log requests
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from 'public' directory
app.use(express.static('public'));

// Mock database for users
const users = {
  1: { id: 1, name: 'Alice Johnson', email: 'alice@example.com', bio: 'Software Developer' },
  2: { id: 2, name: 'Bob Smith', email: 'bob@example.com', bio: 'Product Manager' },
  3: { id: 3, name: 'Carol White', email: 'carol@example.com', bio: 'UX Designer' }
};

// GET / → "My Week 2 API!"
app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

// POST /user → Accepts {name, email}; responds "Hello, [name]!"
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  
  // Error handling: 400 for missing data
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      message: 'Both name and email are required' 
    });
  }
  
  res.json({ 
    message: `Hello, ${name}!`,
    data: { name, email }
  });
});

// GET /user/:id → "User [id] profile"
app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users[userId];
  
  // Error handling: 400 for invalid/missing user
  if (!user) {
    return res.status(400).json({ 
      error: 'User not found',
      message: `No user exists with id: ${userId}` 
    });
  }
  
  res.json({
    message: `User ${userId} profile`,
    profile: user
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.url}` 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});