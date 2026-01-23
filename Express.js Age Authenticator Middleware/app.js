const express = require('express');
const app = express();
const path= require('path')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const authRoutes=require('./routes/authRoutes');

app.use('/',authRoutes);
app.listen(3200,()=>{
    console.log("Server live on http://localhost:3200");
})
