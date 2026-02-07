const express=require('express');
const path=require('path');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','form.html'));
})
router.get('/form',(req,res)=>{
    res.status(302).redirect('/');
})
router.post('/send',(req,res)=>{
    res.status(302).redirect('/success');
})
router.get('/success',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','success.html'))
})
module.exports=router;