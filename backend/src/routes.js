//const imports
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

//const objects
const routes = new express.Router();
const upload = multer(uploadConfig);

//creating the routes in application
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'),PostController.store);


//exporting the modules
module.exports = routes;