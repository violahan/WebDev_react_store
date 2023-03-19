const express = require ('express')
const userRouter = express.Router()

const { User } = require('../db/model');

userRouter.get("/users", async (req, res) => {
    try{
        const data = await User.find()
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

userRouter.post('/users', async (req, res) => {
    const user = new User({
        id: req.body.id,
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
        type: req.body.type
    })

    try {
        const dataToSave = await user.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


userRouter.get('/users/:id', async (req, res) => {
    try{
        const data = await User.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


userRouter.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

userRouter.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.nickname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = userRouter