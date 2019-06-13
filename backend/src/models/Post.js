//const variables
const mongoose = require('mongoose');

//columns that exists in our database
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
});

//exporting modules
module.exports = mongoose.model('Post', PostSchema);