//const variables for application with express
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connecting to mongoDB atlas
mongoose.connect('mongodb+srv://Arthur:a2r4t6h8u0r@cluster0-ddy7h.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3000);

