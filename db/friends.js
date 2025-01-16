const mongoose = require('mongoose');
  
mongoose.connect("mongodb://localhost:27017/userconnection");

const friendsSchema = mongoose.Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    friendid : {
        type: [{
             type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
        }]
       
    
},
    chats : {
        type : Array,
        default : []
    }


});

module.exports = mongoose.model('Friends',friendsSchema);