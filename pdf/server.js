const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.status(200).send('File uploaded successfully.');
});

app.post('/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send('Message cannot be empty.');
  }

  // Simulate a response from the PDF
  const pageNumber = Math.floor(Math.random() * 10) + 1; // Random page number
  const responseMessage = `PDF: Here's the answer to your question. (Page ${pageNumber})`;

  res.status(200).json({ message: responseMessage, page: pageNumber });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
