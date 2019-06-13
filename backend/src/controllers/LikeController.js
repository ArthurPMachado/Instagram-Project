//const variables
const Post = require('../models/Post');


//exporting module in object format
module.exports = {
    async store(req, resp) {
        const post = await Post.findById(req.params.id);

        post.likes += 1;

        await post.save();
    
        req.io.emit('like', post);

        return resp.json(post);
    }
};