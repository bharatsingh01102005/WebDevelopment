//approach 1

// function fizzBuzz(n){
//     for(let i = 0; i<=20; i++){
//     if(i%3=== 0 && i%5==0){
//         console.log('fizzbuzz');
//     }
//     else if(i%5 ===0){
//         console.log('Buzz');
//     }
//     else if(i%3 ===0){
//         console.log('fizz');
//     }
//     else{
//         console.log(i)
//     } 
// }
// }
// fizzBuzz(20);


//approach 2 

// function fizzBuzz(n){
//     for(let i = 0; i<=n; i++){
//         let str ="";
//         if(i%3 ===0){
//             str+='Fizz'
//         }
//         if(i%5===0){
//             str+='Buzz'
//         }
//         if(str===""){
//             str+=i;
//         }
//         console.log(str);

//     }
// }
//  fizzBuzz(20);


// approach 3

function fizzBuzz(n){
    let cnt3 = 1;
    let cnt5 = 1;
    for(let i=0; i<=n; i++){
       let str = "";
       if(cnt3==3){
        str+= 'fizz'
        cnt3=0
       }
       if(cnt5==5){
        str+= 'Buzz'
        cnt3=0
       }
       if(str ==""){
        str+=i;
       }
       console.log(str);
       cnt3++;
       cnt5++;
       

    }
}
fizzBuzz(20)