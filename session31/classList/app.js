let arti = document.querySelector('article');


//1.adding class


// arti.classList.add('sam')
// arti.classList.add('samarth sam');//this is wrong way to add multiple classes without seprated commas
arti.classList.add('sam','samarth','neha','ankit');
arti.classList.add('lokesh');


//2.removing class

arti.classList.remove('sam');


//3.toggle class

arti.classList.toggle('toggle');
//true
arti.classList.toggle('toggle');
//false

//4.contains class

console.log(arti.classList.contains('lokesh'));//true
console.log(arti.classList.contains('sam'));//false 
console.log(arti.classList.contains('abhi'));//false




