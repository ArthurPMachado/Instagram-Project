//const imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//connecting to mongoDB atlas
mongoose.connect('mongodb+srv://Arthur:a2r4t6h8u0r@cluster0-ddy7h.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

//middlewares
app.use((req, resp, next) =>{
    req.io = io;

    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3000);

