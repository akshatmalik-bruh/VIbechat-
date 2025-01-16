const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/userconnection");

const userSchema = mongoose.Schema({

    
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
});
mongoose.model('User',userSchema);
module.exports = mongoose.model('User');