let reactions = [
    {
        "itineraryId": "6383e4841412a26c259eadbe",
        "name": "like",
        "icon": "https://cdn-icons-png.flaticon.com/512/456/456115.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/739/739282.png",
        "userId": []
    },
    {
        "itineraryId": "6383e4841412a26c259eadbe",
        "name": "not-like",
        "icon": "https://cdn-icons-png.flaticon.com/512/1612/1612768.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/1612/1612623.png",
        "userId": []
    },
    {
        "itineraryId": "6383e4841412a26c259eadbe",
        "name": "love",
        "icon": "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2107/2107952.png",
        "userId": []
    },
    {
        "itineraryId": "6383e4841412a26c259eadbe",
        "name": "surprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/2341/2341934.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2341/2341959.png",
        "userId": []
    }
]

require("dotenv").config();
require("../database");
const Reaction = require("../../models/Reaction");

reactions.forEach((element) => {
    Reaction.create(
        {
            itineraryId: element.itineraryId,
            name: element.name,
            icon: element.icon,
            iconBack: element.iconBack,
            userId: element.userId
        }
    )
})
