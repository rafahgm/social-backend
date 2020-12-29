const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    user: {
        id: { type: Schema.Types.ObjectId, ref: 'User' },
        picture: String,
        firstName: String,
        lastName: String,
    },
    createdAt: { type: Schema.Types.Date, default: Date.now },
    modifiedAt: { type: Schema.Types.Date, default: Date.now },
    content: String,
    images: [String],
});

module.exports = mongoose.model('Post', Post);
