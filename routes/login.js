const express  = require('express');
const { body,validationResult } = require('express-validator');
const { default: validator } = require('validator');
const router = express.Router()
const authMiddleware = require('../helpers/authMiddleware')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const User = require('../models/User')
require('dotenv').config()

//LOAD CONNECTED USER
router.get("/",authMiddleware, (req,res)=> {
    User.findById()
        .select("-password")
        .then(user=>{
            if (!user){
                return res.status(404).json({msg: 'user not found!'})
            }
            res.status(200).json(user)
        })
        .catch((err)=>{
            console.error(err.message);
            res.status(500).send({msg: "Server Error"});
        });

});
// LOGIN USER
router.post("/",[
    body("email","Please enter a valid Email").isEmail(),
    body("password","Please write your password").notEmpty(),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    User.findOne({email: req.body.email})
        .then(user=>{
            if(!user){
                return res
                .status(404)
                .json({errors:[{msg: "please register before"}]})
            }
            bcrypt.compare(req.body.password, user.password, (err,isMatch)=>{
                if (err){
                    throw err
                }
                else if (!isMatch){
                    return res.json({errors:[{msg: "Wrong Password !"}]})

                }
                else {
                    let payload={
                        userId: newUser._Id,
                    };
                    jwt.sign(payload,process.env.SECRET_KEY, (err,token)=>{
                        if (err){
                            throw err;
                        }
                        res.send({token});
                    })
                }
            }
            )
        })
}
)
module.exports= router