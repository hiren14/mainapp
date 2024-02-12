const { model } = require('mongoose');
const UserModel = require('../models/user');
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");

const SECRT_KEY = "WdXSkM"
const signup = async (res,req)=>{
    // async fun to work with db 

    // existing user 

    // hashed pass using bycrypt 

    // user create 
    // token
    console.log(req.body);
    
    var usermame = req.body.username;
    var password = req.body.password;
    var   email =req.body.email;

        // existing 
        var data = {
            "name": usermame,
            "email":email,
            "password":password,
           }

           console.log(data)
    
        // try{
        //     const existingUser =await UserModel.findOne({email:email});
        // if(existingUser){
        //     return res.satus(400).json({message:'user already exists'})
        // }
        // const hashedPassword = await bcrypt.hash(password,8);
        // const result = await UserModel.create({
        //     username:username,
        //     email:email,
        //     password:hashedPassword
           
        // });
        // const token = jwt.sign({email:result.email,id:result._id},SECRT_KEY);
        //     res.status(201).json({user:result,token:token})
        // }
        // catch(error){
        //         console.log(error);
        //         res.status(500).json({message:"something went wrong"})
        // }
    }



const signin = async (res,req)=>{
const {email,password} = req.body;
try{
    const existingUser =await UserModel.findOne({email:email});
    if(!existingUser){
        return res.satus(404).json({message:"user not found"})
    }
    const matchPassword = await bcrypt.compare(password,existingUser.password);

    if(!matchPassword){
        return res.satus(400).json({message:'Invaild Creadentials'})
    }
    const token = jwt.sign({email:existingUser.id,id:existingUser._id},SECRT_KEY)
    res.status(201).json({user:existingUser,token:token})
}  catch(error){
    console.log(error);
    res.status(500).json({message:"something went wrong"})
}
}

module.exports={signin,signup}