//used for making server
const express = require('express') //function
const app = express(); //object or instance





// adding app.use is a middleware function //accepts a call back function
// without path i.e for all incoming request
// app.use((req,res)=>{ // call back function
//     // console.log(req);
//     // console.log(res)
//     console.log('you made a request bharat')
//     res.send('<h1>mummy mujhe saadi kara do june july me</h1>')

// })

// with path i.e for specific path only not in other cases 
app.use('/middleware',(req,res)=>{ // call back function
    // console.log(req);
    // console.log(res)
    console.log('you made a request at specific path middleware ')
    res.send('<h1>horn ok please</h1>')

})


app.listen(8080,()=>{
    console.log("ser connected at port 8080")
})