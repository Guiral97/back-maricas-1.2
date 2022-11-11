let cities = [
    {
        "name": "Buenos Aires",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1007x671q90/924/d0AIYM.jpg",
        "population": 15625084,
        "userId": "636d82c66a32c7c4c029d58a"
    },
    {
        "name": "Asuncion",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1193x671q90/924/K4Qomg.jpg",
        "population": 520917,
        "userId": "636d82c66a32c7c4c029d58a"
    },
    {
        "name": "Brasilia",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1375x658q90/924/RnslUp.jpg",
        "population": 3015268,
        "userId": "636d82c66a32c7c4c029d58a"
    },
    {
        "name": "Caracas",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/748x498q90/923/BpyK73.jpg",
        "population": 3500000,
        "userId": "636d82c66a32c7c4c029d58b"
    },
    {
        "name": "Las Vegas",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1007x671q90/923/kLT0DW.jpg",
        "population": 646790,
        "userId": "636d82c66a32c7c4c029d58b"
    },
    {
        "name": "Lima",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/800x600q90/923/YigIYM.jpg",
        "population": 10000000,
        "userId": "636d82c66a32c7c4c029d58b"
    },
    {
        "name": "Montevideo",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/600x400q90/924/WfYvNs.jpg",
        "population": 1381000,
        "userId": "636d82c66a32c7c4c029d589"
    },
    {
        "name": "Paris",
        "continent": "Europa",
        "photo": "https://imagizer.imageshack.com/v2/1074x671q90/922/stf9fn.jpg",
        "population": 2161000,
        "userId": "636d82c66a32c7c4c029d589"
    },
    {
        "name": "Quito",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1375x481q90/924/bc9xnB.jpg",
        "population": 2011000,
        "userId": "636d82c66a32c7c4c029d589"
    },
    {
        "name": "San Andres",
        "continent": "America",
        "photo": "https://imageshack.com/a/img923/1079/s9sHLM.jpghttps://imageshack.com/a/img923/1079/s9sHLM.jpg",
        "population": 48299,
        "userId": "636d82c66a32c7c4c029d588"
    },
    {
        "name": "Santiago",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1375x627q90/923/wqvz31.jpg",
        "population": 5614000,
        "userId": "636d82c66a32c7c4c029d588"
    },
    {
        "name": "Sucre",
        "continent": "America",
        "photo": "https://imagizer.imageshack.com/v2/1024x683q90/922/uPlIDG.jpg",
        "population": 287000,
        "userId": "636d82c66a32c7c4c029d588"
    }

]

require("dotenv").config();
require("../database");
const City = require("../../models/City");

cities.forEach((element)=>{
    City.create(
        {
        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userId: element.userId
    }
    )
})
