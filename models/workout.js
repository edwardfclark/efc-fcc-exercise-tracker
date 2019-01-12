const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the Workout Model.
// Workouts have a name, a date, and a list of exercises.
// Exercises have a name, a type, required sets, required reps, duration, and distance.
// Type is either Cardio or Strength. 
// If it's Cardio, users will enter a distance and a time.
// If it's Strength, users will enter requiredReps and requiredSets.
// Users will be invited to rate how challenging the exercise was for them once finished, if using a template.


const workoutSchema = new Schema({
    userName: String,
    workoutName: String,
    workoutDate: Date,
    exerciseList: [{
        exerciseName: String,
        exerciseType: String,
        exerciseDescription: String,
        duration: Number,
        distance: Number,
        requiredReps: Number,
        requiredSets: Number,
        difficulty: String
    }]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;