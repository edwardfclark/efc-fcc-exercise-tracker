const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the Weighin model.
// Weighins have a many-to-one relationship to users.
// Users enter a date, a weight, and a bodyfat percentage.

const weighinSchema = new Schema({
    userName: String,
    userId: String,
    date: Date,
    weight: {type: Number, required: [true, "weight field is required"]},
    bodyFat: Number,
    notes: String
});

const Weighin = mongoose.model("weighin", weighinSchema);

module.exports = Weighin;