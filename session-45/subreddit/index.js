

let express = require('express');
let app = express();

app.get('/',(req,res)=>{
    res.send('root__route hai')

})
// app.get('/r/banana',(req,res)=>{
//     res.send('banana route hai')

// })
// app.get('/r/orange',(req,res)=>{
//     res.send('oarangeroute hai')

// })
// app.get('/r/cat',(req,res)=>{
//     res.send('cat route route hai')

//})


// subreddit

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);   // { subreddit: 'banana' }
    let { subreddit } = req.params;
    res.send(`<h2>my route was ${subreddit}</h2>`);
});




app.listen(8080,()=>{
    console.log("ser running at port 8080")
})