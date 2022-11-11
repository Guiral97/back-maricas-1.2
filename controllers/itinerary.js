const Itinerary = require('../models/Itinerary');


const controller = {

    read: async (req, res) => {

        let query = {};
        if (req.query.cityId) {
            query = {
                cityId: req.query.cityId
            };
        }

        try {
            let itineraries = await Itinerary.find(query);
            if (itineraries) {
                res.status(200).json({
                    success: true,
                    message: 'Itinerary find successfully',
                    data: itineraries,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: error.message,
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}

module.exports = controller;