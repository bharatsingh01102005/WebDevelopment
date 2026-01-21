

// function someFunc(){
//     let username = 'bharat'
//     function printName(){
//         console.log(username);
//     }
//     printName();
// }
// someFunc();

// function someFunc(){
//     let username = 'bharat'
//     function printName(){
//         console.log(username);
//     }
//     return printName;
// }
// let returnValue = someFunc();
// returnValue();




// function counter(){
//     let count = 0;
//     function getCount(){
//         return count;

//     }
//     return getCount;
// }
// let counter1 =counter;
// console.log(counter1())




// function counter(){
//     let count = 0;
 
//     return {
//         getCount : function(){
//             return count;

//         }
//     };
// }
// let counter1 =counter();
// console.log(counter1.getCount())



//small application


function counter(){
    let count = 0;
    return{
        getCount: function(){
            return count;

        } ,
        increment: function(){
                count+=1;

        } ,
        decrement: function(){
            count--;


        },
        reset: function(){

            count=0;
        }

    }
}
let counter1=counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
counter1.reset()
console.log(counter1.getCount());

// console.log(counter1.decrementt());
// console.log(counter1.reset());