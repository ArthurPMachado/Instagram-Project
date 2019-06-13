//const imports
const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

//exporting module in object format
module.exports = {
    async index(req, resp) {
        const posts = await Post.find().sort('-createdAt');
        
        return resp.json(posts);
    },

    async store(req, resp) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image} = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        //resizing image
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            );

        //deleting not resized images
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place, 
            description,
            hashtags,
            image: fileName,
        });
        
        return resp.json(post);
    }
};