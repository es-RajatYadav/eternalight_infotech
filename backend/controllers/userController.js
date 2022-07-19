const User = require('../models/userModels');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({name, email, password, pic});
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token : generateToken(user._id),
            pic:user.pic
        })
    }else{
        res.status(400);
        throw new Error("Errrrror!");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        return res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token : generateToken(user._id),
            pic:user.pic
        });
    }else{
        res.status(400);
        throw new Error("Invalid Email or Password!");
    }
});

module.exports = { registerUser, authUser };