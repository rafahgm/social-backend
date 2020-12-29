const router = require('express').Router();

const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

router.use('/post', PostController);
router.use('/user', UserController);
router.use('/login', LoginController);

module.exports = router;
