const express = require('express');
const Product = require('../models/Product')
const router = express.Router() // mini istance 


// to show all the products

router.get('/products', async(req,res)=>{
   let products =  await Product.find({})
    res.render('products/index',{products});
})


// to show form for new Product 
router.get('/product/new',(req,res)=>{
    res.render('products/new')
})


// to acutally add the product

router.post('/products',async(req,res)=>{
   let{name,img,price,desc} = req.body;
   await Product.create({name,img,price,desc})
   res.redirect('/products');
    

})


// to show paticular products
 router.get('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('products/show',{foundProduct})
 })


 // form to edit the product 
 router.get('/products/:id/edit',async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit',{foundProduct})
 })
 // to actually update the data in db
 router.patch('/products/:id',async(req,res)=>{
    let {id} = req.params;
    let {name,img,price,desc} = req.body;
    await Product.findByIdAndUpdate(id,{name,img,price,desc})
    res.redirect(`/products/${id}`);
 })

 // to delete the product
 router.delete('/products/:id',async(req,res)=>{
    let {id} = req.params;
    const product = await Product.findById(id);
    for(let review of product.reviews){ 
         await Review.findByIdAndDelete(review);
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
 })
module.exports = router;