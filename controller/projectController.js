const Book = require('../model/userModel')
const Audio = require('../model/audioModel')

exports.getBook = async(req,res)=>{
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log('Error: ',error);
        res.status(500).json(error)
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Attempting to delete book with ID: ${id}`); // Log the ID being deleted
        await Book.findByIdAndDelete(id);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json(error);
    }                                              
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = req.body;
        const book = await Book.findByIdAndUpdate(id, updatedBook, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json(error);
    }
};

// projectController.js

exports.addBook = async (req, res) => {
    try {
      const { name, title, category, image, downloadUrl } = req.body;
  
      // Validate required fields
      if (!name || !title || !category || !image) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create a new book
      const newBook = new Book({
        name,
        title,
        category,
        image,
        downloadUrl,
      });
  
      // Save the book to the database
      await newBook.save();
  
      res.status(201).json(newBook);
    } catch (error) {
      console.log('Error: ', error);
      res.status(500).json(error);
    }
  };




exports.getAudio = async(req,res)=>{
    try {
        const audio = await Audio.find()
        res.status(200).json(audio)
    } catch (error) {
        console.log('Error: ',error);
        res.status(500).json(error)
    }
}

exports.deleteAudio = async(req, res) => {
    try {
        const { id } = req.params;
        await Audio.findByIdAndDelete(id);
        res.status(200).json({ message: 'Audio deleted successfully' });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json(error);
    }
}

exports.addAudio = async (req, res) => {
    try {
        const { name, image, videoId } = req.body;

        if (!name || !image || !videoId) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newAudio = new Audio({
            name,
            image,
            videoId
        });

        await newAudio.save();
        res.status(201).json(newAudio);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json(error);
    }
};
