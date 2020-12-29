const router = require('express').Router();
const User = require('../models/User');

// Add a profile
router.post('/', (req, res) => {
    const profile = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birth: req.body.birth,
        picture: req.body.picture,
    });

    profile.save(function (err) {
        if (err) res.status(200).json({ error: err.message });
        else res.sendStatus(201);
    });
});

// Get all profiles
router.get('/', async (req, res) => {
    res.status(200).json(await User.find({}));
});

// Get a single profile
router.get('/:slug', async (req, res) => {
    res.status(200).json(await User.findOne({ slug: req.params.slug }));
});

module.exports = router;
