const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },  
    edition: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
