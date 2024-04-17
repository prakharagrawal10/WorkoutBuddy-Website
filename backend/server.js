const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const workoutRoutes = require('./routes/workout.jsx');
const userRoutes = require('./routes/user.jsx'); // Import user routes

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workout', workoutRoutes);
app.use('/api/user', userRoutes); // Mount user routes at /api/user

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Start the server after successfully connecting to the database
        app.listen(process.env.PORT, () => {
            console.log('Connected to the database and server is running on port 4000');
        });
    })
    .catch((error) => {
        console.log(error);
    });

