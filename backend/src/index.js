//const imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

//connecting to mongoDB atlas
mongoose.connect('mongodb+srv://Arthur:a2r4t6h8u0r@cluster0-ddy7h.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3000);

