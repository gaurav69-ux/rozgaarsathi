const mongoose = require('mongoose');

const mongo_urL = process.env.MONGO_CONN;

mongoose.connect(mongo_urL)
    .then(() => {
        console.log('MongoDB connected successfully');
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });