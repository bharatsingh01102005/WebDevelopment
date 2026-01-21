
// let formEl = document.querySelector('form')
// formEl.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log('form submitted')

//     // now my browser will not be refrehed

// })


//accessing the elemnts in the form


let formEl = document.querySelector('form')
formEl.addEventListener('submit',function(e){
    e.preventDefault(formEl.elements[0].value);
    console.log(formEl.elements[0].value)


    

})
 