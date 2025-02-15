const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: String,
    category: String,
    image: String,
    downloadUrl: String, // Update field name here
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
