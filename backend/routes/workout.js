const express  = require("express")

const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({msg: 'Get all new workouts'})
})

router.get('/:id', (req,res)=>{
    res.json({msg: 'Get a single workout'})
})

router.post('/',async (req,res)=>{
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } 
    catch (error) {
        res.status(400).json({error:error.message})
    }   

})

router.delete('/:id',(req,res)=>{
    res.json({msg: 'Delete a workout'})
})

router.patch('/:id',(req,res)=>{
    res.json({msg: 'Update a workout'})
})




module.exports = router