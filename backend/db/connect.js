const mongoose = require("mongoose");

exports.dbConnect = async(url) => {
    try{
        await mongoose.connect(url,{});
        console.log('Connected to database!');
    }
    catch(error){
        console.log("Error: ",error);
    }
};
