const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const productRoutes = require('./routes/product')

const ejsMate = require('ejs-mate');


mongoose.connect('mongodb://127.0.0.1:27017/shopping-sam-app')
.then(()=>{
    console.log("DB connected sucessfully")

})
.catch((err)=>{
    console.log("DB not connect sucessfulyy");
    console.log(err);

})


app.engine('ejs',ejsMate)

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))  //views folder 

//public folder 
app.use(express.static(path.join(__dirname,'public'))) //public folder

// seeding database
// seedDB();

app.use(productRoutes); // so har incoming ke liye path check kiya  jaaye  

// ✅ ONLY FIX (add this)
app.listen(8080, ()=>{
    console.log("server connected at 8080");
})