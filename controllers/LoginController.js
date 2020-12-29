const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    const user = await User.findOne({ email: email });

    if (user) {
        const match = await bcrypt.compare(password, user.password);
        console.log(user);
        if (match) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            res.status(200).json({ token: token });
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;
