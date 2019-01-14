const express = require('express');
const router = express.Router();

// User, Workout, and Weighin are Models. Some requests made to this API will reference them.
const User = require('../models/user.js');
const Workout = require('../models/workout.js');
const Weighin = require('../models/weighin.js');

// Create new user.
router.post('/user/new', function(req, res) {

    console.log(`/user/new endpoint accessed by POST request by ${req.body.first} ${req.body.last}.`);

    if (req.body === null) res.send({error: true, message: "Request body is null."});

    User.create({
        firstName: req.body.first,
        lastName: req.body.last,
        dateCreated: Date.now()
    }).then((user) => {
        console.log("New user successfully created!");
        res.send(user);
    })

});

// Access exitsing user and add a new workout template.
router.post("/user/:id", function(req, res) {
    let id = req.params.id;

    User.update({_id: id}, {$push: {workoutTemplates: req.body.template}}).then((data) => {
        res.send(data);
    });

});

module.exports = router;