const express = require ('express');
const authRouter = express.Router();
const { User } = require('../db/model');
const jwt = require('jsonwebtoken');

const SECRET = '123123';
const expiresIn = '1h';
const createToken = payload => {
    return jwt.sign(payload, SECRET, {expiresIn});
};

async function isAuthenticated(email, password) {
    let result = await User.findOne({email: email, password: password}).exec();
    if(result){
        return true;
    }else {
        return false;
    }
}

async function userExist(email) {
    let result = await User.findOne({email: email}).exec();
    if(result){
        return true;
    }else {
        return false;
    }
}

authRouter.post('/auth/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        if (await isAuthenticated(email, password)) {
            console.log("Successful Authentication.")
            const user = await User.findOne({email: email}).exec();
            const {nickname, type} = user;
            const jwToken = createToken({nickname, type, email});
            return res.status(200).json({"token": jwToken});
        } else {
            const status = 401;
            const message = 'Incorrect email or password';
            return res.status(status).json({status, message});
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});





module.exports = authRouter