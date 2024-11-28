const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Corrected import for authRoutes
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/LoginPage', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the IT Company Login API');
});

// Port
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3005 ${PORT}`);
});
