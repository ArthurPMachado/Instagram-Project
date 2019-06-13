//const imports
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

//const objects
const routes = new express.Router();
const upload = multer(uploadConfig);

//creating the routes in application
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'),PostController.store);

routes.post('/posts/:id/like', LikeController.store);
//exporting the modules
module.exports = routes;