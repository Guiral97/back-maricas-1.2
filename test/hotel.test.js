const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');


describe("GET /api/hotels/:id", function () {
    it('should return an 404 ', function (done) {
        const id = '121u248'
        request(app)
            .get('/api/hotels/'+ id)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })

    })
})
