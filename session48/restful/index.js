const express = require('express');
const app = express();
 
const path = require('path') // modules of node js no need to install
const  methodOverride = require('method-override')
const {v4: uuid} = require('uuid');



// dummy array inserted in db
let comments = [
    {
        id:uuid(), // return the id this is string
        username:"Akashay",
        comment:"kuch nahi"
    },
    {
        id:uuid(),
        username:"rahul",
        comment:"kuch kyu"
    },

    {
        id:uuid(),
        username:"sachin",
        comment:"kuch mtbl"
    },{
        id:uuid(),
        username:"kapil",
        comment:"kuch hai"
    }

]


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));  // for form encoded data
app.use(methodOverride('_method')) // method overriding for form _method query parameter

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
    comments.push({username,comment, id:uuid()});
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


//taks 5 to get the form editing blog
app.get('/blogs/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundComments = comments.find(comment => comment.id === id)
   // console.log(foundComments);
    res.render('edit',{foundComments});
})

// task-6 actually editing the blogs using patch and not put
app.patch('/blogs/:id',(req,res)=>{
    const {id} = req.params;
    const foundComment = comments.find(comment => comment.id == id);
    if (!foundComment) {
        return res.status(404).send('Comment not found');
    }

    const { username, comment } = req.body;
    if (username) foundComment.username = username;
    if (comment) foundComment.comment = comment;

    res.redirect('/blogs');
});

app.delete('/blogs/:id',(req,res)=>{
    const {id} = req.params;
    // keep all comments where the id does NOT match the requested id
    comments = comments.filter(comment => comment.id != id);
    res.redirect('/blogs');
});





app.listen(8081,(req,res)=>{
    console.log('server start at port 8081');
})