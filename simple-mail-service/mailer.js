require('dotenv').config();
const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    })
    console.log("Email sent");  
}
sendMail("raheel31102004@gmail.com","From Chalak Lomra","Hello Raheel 123");