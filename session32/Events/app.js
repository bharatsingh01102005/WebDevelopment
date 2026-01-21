
//inline
// function doSomething(){
//     console.log("Button clicked!");
// }
//2nd way
//   onlickevent
// let btn = document.querySelector("button");
// btn.onclick=function(){
//     console.log("hello duniya dusra trakia")
// }


//   on mouseenter event

// btn.onmouseenter = function(){
//     btn.style.color = "red";

// }

// //   on mouseleave event
// btn.onmouseleave = function(){
//     btn.style.color = "black";
// }

// there is two show one event on same time
// let btn = document.querySelector("button");


// function one(){
//     console.log('one')
// }
// function two(){
//     console.log('two')
// }
// btn.onclick = one;
// btn.onclick = two; // this will override the previous function



//solution :  use eventlistener
//it you to run multiple events listner on the same element
// let btn = document.querySelector("button");
// let bodyEl = document.querySelector("body");
// function one(){
//     console.log('one')
// }
// function two(){
//     console.log('two')
// }
// btn.addEventListener("click", one);
// btn.addEventListener("click", two); // this will not override the previous function

//question 1: btn click -> body ka background palm color ho jaaye


// btn.addEventListener("click", function(){
//     bodyEl.style.backgroundColor = "palevioletred";
// })


//onclick --> ek baar click kiya
// ondbclick --> do baar click kiya


// let btn = document.querySelector('button')
//     function meraFun() {
//         console.log('2 baar dabya hai ek baar')
        
//     }

    


// btn.addEventListener("dblclick",meraFun)




















