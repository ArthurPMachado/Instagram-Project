//const variables
const Post = require('../models/Post');


//exporting module in object format
module.exports = {
    async index(req, resp) {
        const posts = await Post.find().sort('-createdAt');
        
        return resp.json(posts);
    },

    async store(req, resp) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image} = req.file;

        const post = await Post.create({
            author,
            place, 
            description,
            hashtags,
            image,
        });
        
        return resp.json(post);
    }
};