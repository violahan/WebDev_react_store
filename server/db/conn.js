require('dotenv').config();

const mongoose = require('mongoose');

const mongoString = process.env.DB_CONNECT_STRING
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = database;