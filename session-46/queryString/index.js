

const express = require('express') //fun
const app = express(); //obj or instance



app.get('/search',(req,res)=>{
console.log(req.query.search);

//destructure
let {search} = req.query;
console.log(search);
res.send(search)
    

})





app.listen(8080,()=>{
    console.log('mera server chal gya hai')
})
