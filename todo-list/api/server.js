const express = require('express');
const dotenv = require('dotenv');
const toDoList = express();
const mongoose = require('mongoose');
const UserModel = require('./userDataSchema');
const cors = require('cors');

dotenv.config();

toDoList.use(cors());
toDoList.use(express.json());

mongoose.connect(process.env.URI).then(() => {
    console.log("[mongodb] Database connected");
}).catch((error) => console.error(error));

toDoList.listen(process.env.API_PORT, () => {
    console.log(`[server] Server listening @ port # ${process.env.API_PORT}`);
});

toDoList.get('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const userData = await UserModel.findOne({ email: email });

        if (userData) {
            res.status(200).json({
                status: 200,
                msg: 'Email found, let user to log in.'
            });
        }
        else {
            res.status(404).json({
                status: 404,
                msg: 'Email not found, do not let user to log in.'
            })
        }
        
    }
    catch (error) {
        console.error(error);
    }
});

toDoList.get('/tasks/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const userData = await UserModel.find({email : email});

        res.json(userData);
    }
    catch(error) {
        console.error(error);
    }
});