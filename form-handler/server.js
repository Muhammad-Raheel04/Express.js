require('dotenv').config();
const express=require('express');
const session=require('express-session');
const nodemailer=require('nodemailer');
const authRoutes=require('./routes/authRoutes');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    session({
        secret:process.env.SESSION_SECRET,
        saveUninitialized:false,
        resave:false,
        cookie:{maxAge:30*60*1000}
    })
)
app.use('/',authRoutes);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("visit http://localhost:3300");
})