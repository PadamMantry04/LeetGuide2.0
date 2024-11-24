const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    leetcode_id:{
        type:String,
        default:"",
        unique:true,
        trim:true
    },
    tips:[{
        tip_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tips" // basically bta rha ki konsa model ka id h yeh
        }
    }],
    datesLoggedIn:[{
        login_date:{
            type:Date,
        }
    }]
})

const User = mongoose.model("User",userSchema);

module.exports = User;