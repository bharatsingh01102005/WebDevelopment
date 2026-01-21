


// let inpEl = document.querySelector('input')

// // inpEl.addEventListener('input', function(){
// //     console.log('input elements chal gya bhai logo')
// // }) 


// function funn(event){ //anyname will work gentaly (e/event)
//     console.log(event.target.value)
//     // console.log('input element chal gya bhai logo')

// }
// inpEl.addEventListener('input',funn);


let inpu = document.querySelector('input')
let h2 = document.querySelector('h2')
inpu.addEventListener('input',function(e){
    h2.innerText = e.target.value;
})





