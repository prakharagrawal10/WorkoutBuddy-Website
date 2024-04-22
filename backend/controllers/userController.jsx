// userController.js

const User = require('../models/usermodels.jsx');

const loginUser = async (req, res) => {
    res.json({mssg: 'Login route works!'});
}

const signupUser = async (req, res) => {
    
    const {email, password} = req.body;
    try{
        const user = await User.signup(email, password);

        res.status(201).json({email,user});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}



module.exports = {signupUser, loginUser};