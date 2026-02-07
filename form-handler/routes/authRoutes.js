const express=require('express');
const path=require('path');
const router=express.Router();
const sessionChecker=require('../middleware/sessionChecker');
const sendForm=require('../controllers/formController');

router.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','form.html'));
})
router.get('/form',(req,res)=>{
    res.status(302).redirect('/');
})
router.post('/send',sendForm);

router.get('/success',sessionChecker,(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','public','pages','success.html'))
})
router.get('/failed',(req,res)=>{
    res.status(500).sendFile(path.join(__dirname,'..','public','pages','failed.html'))
})
module.exports=router;