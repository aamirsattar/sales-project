const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer_id: {
        type: String,
        required: true
    },  
    book_id: {
        type: Number,
        required: true
    },
    order_id: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
