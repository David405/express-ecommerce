var mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Cart', CartSchema);
