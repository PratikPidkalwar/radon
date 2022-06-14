const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Write the schema content
    name: {
        type: String,
        required: true
    },
    category: String,
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)