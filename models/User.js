const mongoose = require('mongoose');
const utils = require('../utils');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const User = new Schema({
    firstName: String,
    lastName: String,
    birth: Date,
    picture: String,
    slug: String,
    email: String,
    password: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

// Creates a unique slug
User.pre('save', async function (next) {
    let slug = utils.slugify(this.firstName, this.lastName);
    // If there already is a slug with this profile first and last name,
    // try to mix with some random four digit number
    await mongoose.models['User'].findOne({ slug: slug }, function (err, res) {
        if (err) console.log('Error: ', err);
        if (res) {
            slug += utils.random(0, 9999);
        }
    });
    this.slug = slug;
    next();
});

// Encrypt password for storage
User.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', User);
