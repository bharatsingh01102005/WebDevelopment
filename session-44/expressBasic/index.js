const express = require('express') //return a funcion
const app = express() // it return new object // entire instance

// console.log(app);

// ask server listen to your request 
app.listen(8080,()=>{console.log("servar connected at port 8080")})
 //  app.listen(8080)
