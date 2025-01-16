const express = require("express");
const router = express.Router();
const User = require("../db/userCredentials");

const middleware = (req,res,next)=>{
        jwt.verify(req.headers.token,"secret",(
        ) =>{
            next();
        })
}

router.get("/",async(req,res)=>{
    
    const user = await User.find({});
    res.send(user);
})

module.exports = router;