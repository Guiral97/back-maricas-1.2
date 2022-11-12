const Show = require('../models/Show');


const controller = {

    read: async (req, res) => {

        let query = {};
        if (req.query.hotelId) {
            query = {
                hotelId: req.query.hotelId
            };
        }

        try {
            let shows = await Show.find(query);
            if (shows) {
                res.status(200).json({
                    success: true,
                    message: 'Shows find successfully',
                    data: shows,
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