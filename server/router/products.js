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

productRouter.get('/products/:id', async (req, res) => {
    try{
        const data = await Product.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


productRouter.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

productRouter.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = productRouter