const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const ecommerce = express();
const mongoose = require('mongoose');
const User = require('./nosql/Schema');
const Product = require('./nosql/Schema');
ecommerce.use(cors());
ecommerce.use(express.json());
dotenv.config();


ecommerce.listen(process.env.BACKEND_PORT, (req, res) => {
    console.log(`[server] Listening to port ${process.env.BACKEND_PORT}`);
});

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log("[mongodb] Database connected");
}).catch((err) => console.log("[mongodb] Database disconnected"));

ecommerce.post('/sign-in/:email/:password', async (req, res) => {
    const { email, password } = req.params;

    try {
        const emailMatchFound = await User.findOne({ email: email });
        if (emailMatchFound) {
            if (emailMatchFound.password == password) {
                res.status(200).json({ status: 200, msg: 'Correct credentials' });
            }
            else {
                res.status(409).json({ status: 409, msg: 'Wrong credentials' })
            }
        }
        else {
            res.status(408).json({ status: 408, msg: 'Email does not exist' });
        }
    }
    catch (error) {
        console.error(error);
    }
});

ecommerce.post('/sign-up/:name/:email/:password/:confirmPassword/:mobileNumber/:dateOfBirth', async (req, res) => {
    const { name, email, password, confirmPassword, mobileNumber, dateOfBirth } = req.params;

    try {
        const emailExists = await User.findOne({email:email});
        
        if (emailExists) {
            res.status(409).json({status: 409, msg: 'Email already exists, can not create a new account!'});
        }
        else {
            const user = new User({name:name, email:email, password:password, confirmPassword, mobileNumber:mobileNumber, dateOfBirth:dateOfBirth});
            await user.save();

            res.status(200).json({status: 200, msg: 'Account created successfully!'});
        }
    }
    catch (error) {
        console.error(error);
    }
});

ecommerce.get('/marketplace', async (req, res) => {
    try {
        const allProducts = await Product.find();

        if (allProducts) {
            res.status(200).json({status:200, allProducts:allProducts});
        }
        else {
            res.status(409).json({status:409, msg: 'No product found'});
        }
    }
    catch(error) {
        console.error(error);
    }
});