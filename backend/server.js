const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Import models to ensure they are registered with Sequelize
require('./models/User');
require('./models/MenuItem');
require('./models/ContentBlock');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for easy remote deployment (Can be restricted later)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/content', require('./routes/content'));

// Default Route
app.get('/', (req, res) => {
  res.send('Sofine Juice Center API is running on SQLite...');
});

// Database Connection & Server Start
const PORT = process.env.PORT || 5001;

// Sync Database tables automatically without needing migrations
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('SQLite Database connected and synced');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database sync error:', err);
  });
