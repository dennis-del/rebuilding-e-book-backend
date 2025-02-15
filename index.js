require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./routes')


/* const app = require('./middleware/appMiddleware') */

require('./connection')

const pfServer = express()

pfServer.get('/download-url/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    
    // Generate the download URL based on the book ID
    const downloadUrl = `http://example.com/files/book-${bookId}.pdf`;
    
    res.json({ downloadUrl });
  });

pfServer.use(cors())

pfServer.use(express.json())

/* pfServer.use(app) */

pfServer.use(router)


PORT = 8000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
})

/* pfServer.get('/',(req,res)=>{
    res.send('get request received')
}) */