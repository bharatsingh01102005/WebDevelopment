

//1. regular invocation

// function fn(){
//     console.log(this);
// }
// fn();



//2.Method invocation


// let obj = {
//     number: 2,
//     fn:function(){
//         console.log(this)
//     }
// }
// obj.fn(); // this is pointing the function over which it is called 




//question

// let obj = {
//     number: 2,
//     fn:function(){
//         console.log(this)
//     }
// }
// let myFun= obj.fn;
// myFun();




// let obj2 = {
//     fn:function(){
//         function calculate(){
//              console.log(this)
//         }
//         calculate();
      
//     }
// }
// obj2.fn();


//3. constructor fuction calling

// function CreateObj(){
//     this.x = 20;
// }
// let obj = CreateObj();
// console.log(obj);
// console.log(obj.x);
//newly created object ko thsi point karega hamesha 



//.4 .call(), .apply(), .bind()

// let obj={
//     a : 20,
//     fn :function(){
//         console.log(this);
//     }
// }

// let obj2 ={
//     a:50
// }
// let obj3 ={
//     name : "shyam"
// }

//obj.fn()
//obj2.fn() //error
//obj.fn.call(obj2);
//obj.fn.call(obj3)
//obj.fn.call(obj,1,2,3)
//obj.fn.apply(obj,[1,2,3,4 ])
// jab bhi tum  .call() ko call karte ho  jab call method ke andar
//  jo method dala jata hai usse hi call this keyword piont karta hai



//.bind()


let obj3={
    num:3,
    fn:function(){
        console.log(this)
    }
}
// obj3.fn();

let myfun = obj3.fn.bind(obj3)
myfun();



















