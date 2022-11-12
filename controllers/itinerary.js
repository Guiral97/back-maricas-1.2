const Itinerary = require('../models/Itinerary');


const controller = {

    create: async (req, res) => {
        try {
            let itinerary = await Itinerary.create(req.body);
            res.status(201).json({
                response: itinerary._id,
                success: true,
                message: "Itinerary created successfully",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

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
    update: async (req, res) => {
        let id = req.params.id;
        try {
            let itinerary = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {new: true} )
            
            if (itinerary) {
                res.status(200).json({
                    response: itinerary.id,
                    success: true,
                    message: "Itinerary update successfully",
                });
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