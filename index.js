const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');
const fakeData = require('./fakeData');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/social?authSource=admin`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(bodyParser.json({}));
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(cors());
app.use(router);

module.exports = app.listen(process.env.PORT, 'localhost', () => {
    if (process.env.NODE_ENV !== 'test')
        console.log(
            `👌 Servidor TA ON <https://localhost:${process.env.PORT}/>`
        );
});
