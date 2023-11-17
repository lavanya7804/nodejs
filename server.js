const express = require("express");
const app = express();
const path = require("path")

app.get("/education",(req,res)=>{
    res.sendFile(path.join(__dirname,"education.html"));
})

app.get("/entertainment",(req,res)=>{
    res.sendFile(path.join(__dirname,"entertainment.html"));
})

app.get("/sports",(req,res)=>{
    res.sendFile(path.join(__dirname,"sports.html"));
})

app.listen(1999,()=>{
    console.log("server is runnning");
})
