const express = require('express');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Ana endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Help Desk Backend API' });
});

// Server başlatma
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 