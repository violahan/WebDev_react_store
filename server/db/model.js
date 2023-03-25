// Requiring module
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: String,
    nickname: String,
    password: {
        select: false,
        type: String
    },
    type: Number,
    token:String
}, {
    versionKey: false
});

const productsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    tags: String,
    price: String,
    status: String
},{
    versionKey: false
});

const cartSchema = new mongoose.Schema({
    productId: Number,
    name: String,
    image: String,
    price: Number,
    mount: Number,
    userId: String,
    id: Number
},{
    versionKey: false
})

// Creating model objects
const User = mongoose.model('users', usersSchema);
const Product = mongoose.model('products', productsSchema);
const Cart = mongoose.model('carts', cartSchema);

// Exporting our model objects
module.exports = {
    User, Product, Cart
}
