const express = require("express");
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoute');
const mongose = require('mongoose');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users',userRouter);
app.use('/note',noteRouter);


app.get('/',(req,res)=>{
    res.send("Hello")
})

mongose.connect("mongodb+srv://dbhiren:dbhiren@cluster0.oxrxqyv.mongodb.net/blog")
.then(()=>{
    app.listen(3000, ()=>{
        console.log("server start")
    })
})
.catch((error)=>{
    console.log(error)
})
