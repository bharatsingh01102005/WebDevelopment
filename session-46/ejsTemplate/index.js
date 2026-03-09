const express = require('express'); //fun
const app = express(); //obj
const path = require('path');



app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'views'));

app.get('/',(req,res) => {
   res.render('index');  
})

app.get('/random',(req,res) => {
    let number = Math.floor(Math.random()*100);
   res.render('random',{number});  
})
app.listen(8080,() => {
    console.log('mera server chal gya at 8080')
})