const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the User model.
// Each user can create and store a number of Workout Templates.
// Workout Templates populate a dropdown menu in the Front End, which allows the user to quickly fill out the workout data form.
// Users have a one-to-many relationship with Workouts.
// Users have a one-to-many relationship with Weigh-Ins.

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "firstName field is required"]
    },
    lastName: {
        type: String,
        required: [true, "lastName field is required"]
    },
    dateCreated: Date,
    workoutTemplates: [
        {
            templateName: String, 
            exerciseList: [{
                exerciseName: String,
                exerciseType: String,
                exerciseDescription: String,
                duration: Number,
                distance: Number,
                requiredReps: Number,
                requiredSets: Number
            }]
        }
    ]

});

const User = mongoose.model("user", userSchema);

module.exports = User;