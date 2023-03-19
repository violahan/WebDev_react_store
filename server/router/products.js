const express = require ('express')
const productRouter = express.Router()

const { Product } = require('../db/model');

productRouter.get("/products", async (req, res) => {
    try{
        const data = await Product.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

productRouter.post('/products', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        tags: req.body.tags,
        price: req.body.price,
        status: req.body.status
    })

    try {
        const dataToSave = await product.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = productRouter