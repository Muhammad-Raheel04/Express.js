require('dotenv').config();
const express = require('express');
const app = express();
const path= require('path')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const authRoutes=require('./routes/authRoutes');

app.use('/',authRoutes);
const PORT=process.env.PORT || 3200;
app.listen(PORT,()=>{
    console.log("Server live on http://localhost:3200");
})
