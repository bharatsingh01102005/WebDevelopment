

let grandparent = document.getElementById('grandparent')
let parent = document.getElementById('parent')
let child = document.getElementById('child')



// grandparent.addEventListener('click',()=>{
// console.log("clicked grandparent")
// },false)


// parent.addEventListener('click',()=>{
// console.log("clicked parent")
// },false)


// child.addEventListener('click',()=>{
// console.log("clicked child")
// },false)





grandparent.addEventListener('click',(event)=>{
console.log("event")
console.log("clicked grandparent")
},true)


parent.addEventListener('click',(event)=>{
    console.log("event")
    event.stopPropagation();
console.log("clicked parent")
},true)


child.addEventListener('click',(event)=>{
console.log("event")
console.log("clicked child")
},true)