const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const workoutRoutes = require ('./routes/workout')

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use(('/api/workout'),workoutRoutes)

//connect to db
mongoose.connect(process.env.MONO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () =>{
            console.log('connected to db and Server is running on port 4000')
        })
    })  
    .catch((error)=>{
        console.log(error)
    })
