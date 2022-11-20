const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');


describe('/api/cities', function () {
    it('should return an array of objects', function (done) {
        request(app)
            .get('/api/cities/')
            .expect(res => {
                assert.isArray(res.body.response);
                res.body.response.forEach(e => {
                    assert.isObject(e);
                });
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('The user sent a string in the name field', function (done) {
        request(app)
            .post('/api/cities')
            .send({
                name: "Las Vegas",
                continent: "America",
                photo: "https://imagizer.imageshack.com/v2/1007x671q90/923/kLT0DW.jpg",
                population: 646790,
                userId: "636d82c66a32c7c4c029d58b"
            })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect( res => {
                assert.isString(res.body.response.name, 'Name is a string')              
            })
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })
})
