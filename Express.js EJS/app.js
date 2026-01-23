const express=require('express');

const app=express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home',{name:"Muhammad Raheel"});
})
const PORT=3200;
app.listen(PORT,()=>{
    console.log("Server live http://localhost:3200");
})
