const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "Public" folder
app.use(express.static(path.join(__dirname, 'Public')));

// Always serve index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', '2.html'));
});

// 🚨 Use Railway's assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
