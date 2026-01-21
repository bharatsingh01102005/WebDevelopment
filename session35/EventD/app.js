let products = document.querySelectorAll('section figure');
console.log(products)


//not optimise way
// for(let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText)
//     })
// }



//dynamic add karoge to dikkat dega


//--------------------


//event DElegation  --> parent par event lagao rather than child par



let section = document.getElementById('container')

section.addEventListener('click',function(e){
    console.log(e);

    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
})








