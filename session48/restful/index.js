const express = require('express');
const app = express();
 
const path = require('path') // modules of node js no need to install

// dummy array inserted in db
let comments = [
    {
        id:0,
        username:"Akashay",
        comment:"kuch nahi"
    },
    {
        id:1,
        username:"rahul",
        comment:"kuch kyu"
    },

    {
        id:2,
        username:"sachin",
        comment:"kuch mtbl"
    },{
        id:3,
        username:"kapil",
        comment:"kuch hai"
    }

]


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));  // for form encoded data

//root
app.get('/',(req,res)=>{
    res.send("root me aapka swagat hai")
})


//task-1 display all the blocks
app.get('/blogs',(req,res)=>{
    res.render('index',{comments})
})


//task-2 show just a form to adding new blogs
app.get('/blogs/new',(req,res)=>{
    res.render('new')
})


// task 3 actually add a blog db
app.post('/blogs',(req,res)=>{
    
    // console.log(req.body)
    let {username,comment} = req.body;
    comments.push({username,comment, id:comments.length});
    res.redirect('/blogs');  // yad rakhna ki get requesrt jaaa rhai hai

    //res.send("data aa gya "); 
})


// task 4 to show info bout blogs
app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params;

    let foundComments = comments.find((comment)=>{ 
        return comment.id == id
    })

    //console.log(foundComments);

    res.render('show',{foundComments})

})



app.listen(8081,(req,res)=>{
    console.log('server start at port 8081');
})