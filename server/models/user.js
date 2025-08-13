const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the structure (schema) for a user document
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

// Create a model based on the schema
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
