//const imports
const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

//const objects
const routes = new express.Router();
const upload = multer();

//using the routes methods
routes.post('/posts', upload.single('image'),PostController.store);


//exporting the modules
module.exports = routes;