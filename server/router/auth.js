const express = require ('express');
const authRouter = express.Router();
const { User } = require('../db/model');
const jwt = require('jsonwebtoken');

authRouter.post('/auth/login', async (req, res) => {
    const {email, password} = req.body;
    if (!(email && password )) {
        return res.status(400).send("All input is required");
    }
    try {
        const user = await User.findOne({ email: email, password: password});
        if (user){
            const {email, type} = user;
            const token = jwt.sign(
                { id: user._id, email: email, type: type },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            user.save();
            res.status(200).json({"user": user});
        }
        else {
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


authRouter.post('/auth/register', async (req, res) => {
    const {email, password, nickname, type} = req.body;
    try{
        // Validate user input
        if (!(email && password && nickname && type)) {
            return res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const user = await User.create({
            email: email.toLowerCase(),
            nickname: nickname,
            password: password,
            type: type,
        })

        const token = jwt.sign(
            { id: user._id, email: email, type: type },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;
        user.save()

        // return new user
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})



module.exports = authRouter