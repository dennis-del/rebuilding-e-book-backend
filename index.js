require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('./connection');

const pfServer = express();

pfServer.use(cors());
pfServer.use(express.json());

// Default route to avoid "Cannot GET /" error
pfServer.get('/', (req, res) => {
    res.send('Backend is running successfully');
});

// Book download route
pfServer.get('/download-url/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const downloadUrl = `http://example.com/files/book-${bookId}.pdf`;
    res.json({ downloadUrl });
});

// Use defined routes
pfServer.use(router);

const PORT = process.env.PORT || 8000;
pfServer.listen(PORT, () => {
    console.log(`Server running successfully at port number: ${PORT}`);
});
