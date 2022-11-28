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

    it('should return an 201', function (done) {
        request(app)
            .post('/api/hotels')
            .send({
                name: "Royal Tulip Brasília Alvorada",
                photo: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/20170551.jpg?k=34aefee5153017989801c062582c1e50f770c6a9da72ffc2657fdfcbe2a91dd5&o=&hp=1",
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.trivago.com.co%2Fes-CO%2Foar%2Fhotel-royal-tulip-brasilia-alvorada%3Fsearch%3D100-129721&psig=AOvVaw1lPEocfCPoo0DJGg5C8_4S&ust=1668233002081000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjgt666pfsCFQAAAAAdAAAAABAT",
                    "https://royal-tulip-alvorada.hotels-in-brasilia.com/data/Photos/Big3/12775/1277532/1277532952.JPEG",
                ],
                capacity: 138,
                cityId: "636d90bed8cb38986aa0e48c",
                userId: "636d82c66a32c7c4c029d589"
            })
            .expect(201)                          
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })

    it('The user sent a number in the capacity field', function (done) {
        request(app)
            .post('/api/hotels')
            .send({
                name: "Royal Tulip Brasília Alvorada",
                photo: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/20170551.jpg?k=34aefee5153017989801c062582c1e50f770c6a9da72ffc2657fdfcbe2a91dd5&o=&hp=1",
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.trivago.com.co%2Fes-CO%2Foar%2Fhotel-royal-tulip-brasilia-alvorada%3Fsearch%3D100-129721&psig=AOvVaw1lPEocfCPoo0DJGg5C8_4S&ust=1668233002081000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjgt666pfsCFQAAAAAdAAAAABAT",
                    "https://royal-tulip-alvorada.hotels-in-brasilia.com/data/Photos/Big3/12775/1277532/1277532952.JPEG",
                ],
                capacity: 138,
                cityId: "636d90bed8cb38986aa0e48c",
                userId: "636d82c66a32c7c4c029d589"
            })
            .expect( res => {
                assert.isNumber(res.body.response.capacity, 'Capacity is a number')              
            })
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    });
    it('the hotel has been successfully removed', function (done) {
        request(app)
            .delete('/api/hotels/6384a0a08b96d0f51e651ef8')
            .expect(200 )
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })

})
