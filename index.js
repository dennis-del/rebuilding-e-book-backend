require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('./connection');

const pfServer = express();

pfServer.use(cors({ 
    origin: '*' // Allow all origins
}));
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

const PORT = process.env.PORT || 10000; // Ensure using process.env.PORT
pfServer.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running successfully at port number: ${PORT}`);
});

