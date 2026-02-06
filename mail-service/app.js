require('dotenv').config();
const express=require('express');
const nodemailer=require('nodemailer');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello");
})
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Visit http://localhost:5500");
})