const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../db/userCredentials");
const Friends = require("../db/friends");
const Aboutuser = require("../db/AboutUser");




const middleware = (req,res,next)=>{
        jwt.verify(req.headers.token,"secret",(
        ) =>{
            next();
        })
        

}

router.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    const bozo = await User.findOne({
        email
    })
    if(bozo && bcrypt.compare(password,bozo.password)){

        const token = jwt.sign({email:email},"secret");
       
        res.status(200);
        res.send(token);


    }
    else{
        res.sendStatus(401);
    }
})
router.post("/register",async (req,res)=>{ 
    let {email,password} = req.body;
    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            res.status(500).send;
        }
        else{
            password = hash;
        }
    const Newuser = await User.create({
        email,
        password
        })
    console.log(Newuser);
    res.send("User created");
    
    })});

router.post("/friendreq",middleware,async(req,res)=>{
    
        const user = await User.findOne({username : req.headers.token.username});
        const friend = await Friends.create({
            userid : user._id,
            

        })
        await friend.friendid.push(user._id);
        await friend.save();
        console.log(friend);
        res.send(friend);



})
 router.post("/aboutUser",middleware,async(req,res)=>{
    let{Height,Gender,Hobby,Course,Year} = req.body;
    const user = await User.findOne({username : req.headers.token.username});
    const userData = await Aboutuser.create({
        userid : user._id,
        Height,
        Gender,
        Hobby,
        Course,
        Year
        })
 })

module.exports = router;