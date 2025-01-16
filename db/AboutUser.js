const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userconnection");


const AboutUserSchema = mongoose.Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }
    
    ,Height :{
        type : Number,
        required : true
    }
    ,Gender :
    {
        type : String,
        required : true
        
    },
    Hobby : {
        type : String,
        required : true
    },
    Course :{
        type : String,
        required : true
    },Year :
    {
        type : Number,
        required : true
        }

    }                     
    
);
mongoose.model('AboutUser',AboutUserSchema);
module.exports = mongoose.model('AboutUser');   