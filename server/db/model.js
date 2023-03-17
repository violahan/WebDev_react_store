// Requiring module
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: Number,
    email: String,
    nickname: String,
    password: {
        select: false,
        type: String
    },
    type: Number
});

const productsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    tags: String,
    price: String,
    status: String
});

const cartSchema = new mongoose.Schema({
    productId: Number,
    name: String,
    image: String,
    price: Number,
    mount: Number,
    userId: String,
    id: Number
})

// Creating model objects
const User = mongoose.model('users', usersSchema);
const Product = mongoose.model('products', productsSchema);
const Cart = mongoose.model('carts', cartSchema);

// Exporting our model objects
module.exports = {
    User, Product, Cart
}
