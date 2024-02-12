const mogoose = require("mongoose");
const NoteSchema = mogoose.Schema({
    username:{
        type:String,
        require: true

    },
    password:{
        type:String,
        require:true
    },
    userid:{
        type:mogoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
},{timrstamps:true});

module.exports = mogoose.model('Note',UserSchema)