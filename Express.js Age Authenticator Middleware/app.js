const express = require('express');
const app = express();
const path= require('path')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

function ageAuthenticator(req,res,next){
    if(req.body.age<18){
        return res.redirect('/blocked');
    }
    res.redirect('/services');
}
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','pages','index.html'));
})

app.post('/check-age',ageAuthenticator);

app.get('/blocked',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','pages','denied.html'));
})
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','pages','services.html'));
})
app.listen(3200,()=>{
    console.log("Server live on http://localhost:3200");
})
