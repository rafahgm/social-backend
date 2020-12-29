const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const faker = require('faker');

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('POST /login', () => {
    it('should login with provided credentials', () => {
        chai.request(server)
            .post('/login')
            .send({
                email: 'Chaya.DuBuque@hotmail.com',
                password: '12456278',
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
            });
    });
});
