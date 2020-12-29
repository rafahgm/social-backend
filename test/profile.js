const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const User = require('../models/User');
const faker = require('faker');

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('GET /user', () => {
    it('should GET all users', (done) => {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });
});

describe.skip('/POST Profile', () => {
    it('should POST one profile', (done) => {
        const profile = new User({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            birth: faker.date.past(),
            picture: faker.image.people(),
        });
        chai.request(server)
            .post('/profile')
            .send(profile)
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
});
