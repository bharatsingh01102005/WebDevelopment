const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); // templating file
app.use(express.static(path.join(__dirname,'public'))); // static files

app.use(express.urlencoded({ extended: true })) // middleware to get the form data

app.use(express.json()); //middle ware for json data

app.get('/',(req,res)=>{
    res.render('index');
});

// HANDLE GET REQUEST
app.get('/user',(req,res)=>{
    let {username,age} = req.query;
    res.send('get request sent successfully');
});

// HANDLE POST REQUEST
app.post('/user',(req,res)=>{
    console.log(req.body); 
    res.send('post method ke through ');
});

app.listen(8080,()=>{
    console.log("server start ho gya hai 8080 par");
});   