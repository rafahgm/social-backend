const router = require('express').Router();
const Post = require('../models/Post');

// Development only
// Get all posts
router.get('/', (req, res) => {
    Post.find({}, (err, data) => {
        if (err) console.log(err);
        res.status(200).json(data);
    });
});

// Get all posts from a single user
router.get('/:id', (req, res) => {});

// Get friends's posts
router.get('/:id/friends', (req, res) => {
    let posts = [];
    Post.findOne({ _id: req.params.id }, (err, res) => {
        if (err) console.log(err);
        console.log(res.friends);
    });

    res.sendStatus(200);
});

module.exports = router;
