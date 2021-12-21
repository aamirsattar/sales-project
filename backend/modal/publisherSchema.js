const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    publisher_id: {
        type: String,
        required: true
    },  
    name: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Publisher', publisherSchema);
