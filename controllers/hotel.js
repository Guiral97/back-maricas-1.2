const Hotel = require("../models/Hotel");

const controller = {
    create: async (req, res) => {
        try {
            let new_hotel = await Hotel.create(req.body);
            res.status(201).json({
                id: new_hotel._id,
                success: true,
                message: "Hotel created successfully",
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
        let order = {}

        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: "i" },
            };
        }

        if (req.query.order) {
            order = {
                capacity: req.query.order
            }
        }

        try {
            let hotels = await Hotel.find(query).sort(order)
            if (hotels) {
                res.status(200).json({
                    success: true,
                    message: "Hotel find successfully",
                    response: hotels,
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

    findOne: async (req, res) => {
        let id = req.params.id;
        try {
            let hotel = await Hotel.findOne({ _id: id }).populate({
                path: "userId",
                select: ["name", "photo"],
            });
            if (hotel) {
                res.status(200).json({
                    response: hotel,
                    success: true,
                    message: "Hotel find successfully",
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

    update: async (req, res) => {
        let id = req.params.id;
        try {
            let hotel = await Hotel.findOneAndUpdate({_id: id}, req.body, {new: true})
            
            if (hotel) {
                res.status(200).json({
                    response: hotel.name,
                    success: true,
                    message: "Hotel update successfully",
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
};

module.exports = controller;
