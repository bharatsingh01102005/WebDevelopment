const express = require("express");
const app = express();
const path = require('path');


app.set('view engine','ejs'); //view engine ko set krdiya hai taaki template dekh paaye
app.set('views',path.join(__dirname,"views")); //better

//root route 
app.get('/',(req,res)=>{
    //res.send("HI");
    res.render('index');
})

app.get('/random',(req,res)=>{
    //yaha par logic likhne ke aad template ke pass bhej dunga
    let number = Math.floor(Math.random()*100);
    res.render('random',{number});

})

app.listen(8080,()=>{
    console.log("mera server chal gya at 8080")
})