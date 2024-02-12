const express = require('express')
const noteRouter = express.Router();

noteRouter.get("/",(req,res)=>{
    res.send("note ge Req")
})

noteRouter.post("/",(req,res)=>{
    res.send("note post Req")
})

module.exports = noteRouter;
