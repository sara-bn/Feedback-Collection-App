const mongoose = require('mongoose');
//thees two are equal
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
})

mongoose.model("users", userSchema);