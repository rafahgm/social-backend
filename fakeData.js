const faker = require('faker');
const Post = require('./models/Post');
const User = require('./models/User');
const utils = require('./utils');

exports.insertUsers = function (number) {
    // Insert faker users
    for (let i = 0; i < number; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            birth: faker.date.past(),
            picture: faker.image.people(),
            email: faker.internet.email(firstName, lastName),
            password: '12345678',
        });
        user.save().catch((err) => {
            console.error(err);
        });
    }
};

exports.insertPosts = function (num) {
    // Insert fake posts
    User.find({}, function (err, res) {
        if (err) return;
        res.forEach((user) => {
            for (let i = 0; i < num; i++) {
                const post = new Post({
                    content: faker.lorem.text(utils.random(4, 10)),
                    images: [faker.image.food()],
                    user: {
                        id: user._id,
                        picture: user.picture,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    },
                });
                post.save();
            }
        });
    });
};
