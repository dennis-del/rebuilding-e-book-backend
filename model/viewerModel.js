const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
      },
      Email: {
        type: String,
        required: true,
        unique: true
      },
      Password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
      }
    });

module.exports = mongoose.model('User', userSchema);
