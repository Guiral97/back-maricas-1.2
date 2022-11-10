let admins = [
  {
    name: "Ignacio",
    lastName: "Borraz",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 32,
    email: "ignacioborraz@hotmail.com",
    password: "Hola1234",
    code: "asd54561dasd",
    verified: true,
    logged: true,
  },
  {
    name: "Alejandro",
    lastName: "Sanchez",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 27,
    email: "alesanchez@gmail.com",
    password: "Queso5871",
    code: "igudijr3873sfsd",
    verified: true,
    logged: true,
  },
  {
    name: "Aldana",
    lastName: "Chavez",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 25,
    email: "aldanamagalicb@yahoo.com",
    password: "Chao1234",
    code: "asdgsafg965984asdf",
    verified: true,
    logged: true,
  },
  {
    name: "Melissa",
    lastName: "Uribe",
    role: "admin",
    photo:
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    age: 27,
    email: "meliuribe@gmail.com",
    password: "Andres15423",
    code: "wetsdfhhj324sdg",
    verified: true,
    logged: true,
  },
];

require("dotenv").config();
require("../database");
const User = require("../../models/User");

admins.forEach((elemento) => {
  User.create({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    photo: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    code: { type: String, required: true },
    verified: { type: Boolean, required: true },
    logged: { type: Boolean, required: true },
  });
});
