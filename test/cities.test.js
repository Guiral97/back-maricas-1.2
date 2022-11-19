const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');

describe('GET /api/cities', function () {
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
})