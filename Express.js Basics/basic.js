const express = require('express');

const app = express();

app.get("",(req,resp)=>{
    resp.send("<h1>This is Home Page.</h1>");
})
app.get("/about",(req,resp)=>{
    resp.send("<h1>This is About Page.</h1>");
})
app.listen(3000,()=>{
    console.log("Server running at port http://localhost:3000");
});