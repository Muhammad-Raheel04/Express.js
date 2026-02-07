const express=require('express');
const path=require('path');
const router=express.Router();
const sessionChecker=require('../middleware/sessionChecker');
router.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','form.html'));
})
router.get('/form',(req,res)=>{
    res.status(302).redirect('/');
})
router.post('/send',(req,res)=>{
    const {name,email,message}=req.body;
    if(name){
        req.session.formSubmitted=true;
        res.status(302).redirect('/success');
    }
    else{
        res.status(500).redirect('/failed');
    } 
})
router.get('/success',sessionChecker,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','success.html'))
})
router.get('/failed',(req,res)=>{
    res.status(500).sendFile(path.join(__dirname,'..','public','pages','failed.html'))
})
module.exports=router;