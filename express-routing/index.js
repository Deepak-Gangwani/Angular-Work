// index.js

// Import the Express.js module
const express = require('express');

// Create an Express application
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
