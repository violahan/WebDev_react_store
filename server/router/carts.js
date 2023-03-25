const express = require ('express')
const cartsRouter = express.Router()
const { Cart} = require('../db/model');
const jwt = require("jsonwebtoken");

cartsRouter.get("/carts", async (req, res,next) => {
    if (
        req.headers.authorization === undefined ||
        req.headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
        const status = 401;
        const message = 'Error in authorization format';
        res.status(status).json({ status, message });
        return;
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        const verifyTokenResult = verifyToken(token);
        if (verifyTokenResult instanceof Error) {
            const status = 401;
            const message = 'Access token not provided';
            res.status(status).json({ status, message });
            return;
        }else{
            const userEmail = verifyTokenResult.email;
            const data = await Cart.find({userId: userEmail});
            res.json(data)
        }
        next();
    } catch (err) {
        const status = 401;
        const message = 'Error token is revoked';
        res.status(status).json({ status, message });
    }
});

const verifyToken = token => {
    return jwt.verify(token, process.env.TOKEN_KEY, (err, decode) =>
        decode !== undefined ? decode : err
    );
};

module.exports = cartsRouter