const express = require('express');
const database = require('./db/conn')
const app = express();
const PORT = 3000;
app.use(express.json());

const userRouter = require('./router/user')
app.use(userRouter)

const productsRouter = require('./router/products')
app.use(productsRouter)

const authRouter = require('./router/auth')
app.use(authRouter)

const cartsRouter = require('./router/carts')
app.use(cartsRouter)



app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);

