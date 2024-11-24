const mongoose = require('mongoose');

const tipSchema = mongoose.Schema({
    header:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
}, {timestamps:true}
)

const Tips = mongoose.model("Tips",tipSchema);

module.exports = Tips;