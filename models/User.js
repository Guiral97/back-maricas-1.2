const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true },
  photo: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  code: { type: String, required: true },
  verified: { type: Boolean},
  logged: { type: Boolean},
});

const User = mongoose.model("users", schema);
module.exports = User;
