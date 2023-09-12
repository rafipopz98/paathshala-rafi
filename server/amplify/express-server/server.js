// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route for creating users
app.post('/api/users', (req, res) => {
  // Extract user data from the request body
  const { name, email, phoneNumber, jobTitle } = req.body;

  // Perform any necessary validation and database operations here
  // For this example, we'll just send back a response with the received data
  res.json({ message: 'User created successfully', userData: { name, email, phoneNumber, jobTitle } });
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
