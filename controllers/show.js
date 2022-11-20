const Show = require('../models/Show');


const controller = {

    create: async (req, res) => {
        try {
            let show = await Show.create(req.body);
            res.status(201).json({
                response: show._id,
                success: true,
                message: "Show created successfully",
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
        if (req.query.hotelId) {
            query = {
                hotelId: req.query.hotelId
            };
        }
        if (req.query.userId) {
            query = {
                userId: req.query.userId
            };
        }

        try {
            let shows = await Show.find(query).populate({path:'userId', select:'role -_id'});
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

    update: async (req, res) => {
        let id = req.params.id;
        try {
            let show = await Show.findOneAndUpdate({ _id: id }, req.body, { new: true })

            if (show) {
                res.status(200).json({
                    response: show.id,
                    success: true,
                    message: "Show update successfully",
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

    destroy: async (req, res) => {
        let id = req.params.id;
        try {
            let show = await Show.findOneAndDelete({ _id: id }, req.body,)

            if (show) {
                res.status(200).json({
                    response: show._id,
                    success: true,
                    message: "Show was deleted successfully",
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