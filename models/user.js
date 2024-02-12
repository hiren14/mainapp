const mogoose = require("mongoose");
const UserSchema = mogoose.Schema({
    username:{
        type:String,
        require: true

    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{timrstamps:true});

module.exports = mogoose.model('User',UserSchema)