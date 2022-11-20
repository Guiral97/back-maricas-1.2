const app = require('../app');
const chai = require('chai');
const assert = chai.assert;
const request = require('supertest');


describe("/api/hotels", function () {
    it('should return an 404 ', function (done) {
        const id = '121u248'
        request(app)
            .get('/api/hotels/' + id)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })
    
    it('should return an 400', function (done) {
        request(app)
            .post('/api/hotels')
            .send({
                "name": "Hotel Nuevo",
                "capacity": 100,
                "cityId": "5f9f1b9b",
            })
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })
})
