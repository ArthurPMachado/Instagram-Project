//const variables
const Post = require('../models/Post');


//exporting module with function
module.exports = {
    async index(req, resp) {
        
    },

    async store(req, resp) {
        console.log(req.file);
        
        return resp.json({ ok: true });
    }
};