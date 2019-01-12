const express = require('express');
const router = express.Router();

// User, Workout, and Weighin are Models. Some requests made to this API will reference them.
const User = require('../models/user.js');
const Workout = require('../models/workout.js');
const Weighin = require('../models/weighin.js');