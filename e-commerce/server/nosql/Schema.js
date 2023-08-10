// const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    confirmPassword: {
        required: true,
        type: String
    },
    mobileNumber: {
        required: true,
        type: String
    },
    dateOfBirth: {
        required: false,
        type: Date
    }
});

const productSchema = mongoose.Schema({
    image: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    }
})

const User = mongoose.model('USER', userSchema);
const Product = mongoose.model('PRODUCTS', productSchema);

module.exports = User, Product;