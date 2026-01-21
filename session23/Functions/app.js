// ----------------------------------------------------------------------
// //function defination
// function sum(){
//     let num1 = 10;
//     let num2 = 30;
//     console.log(num1+num2)
// }
// //function calling
// sum();


// function triple(n3){ //parameter
//     let n1 = 10;
//     let n2 = 20;                      //this function is parameterise function
//     console.log(n1+n2+n3);
// }

// // triple(30); //arguments
// // triple(20);  //arguments
// // triple(60);   //arguments


// function sum2(){
//     let num1 = 10;
//     let num2 = 30;
//     return(num1+num2);
// }
// // sum2();
// // console.log(sum2());


// //multiple parameter
// function sam(n1,n2){
//     return n1+n2;
// }
// console.log(sam(20,10));


// //nan
// function sam(n1,n2){
//     return n1+n2;
// }
// // console.log(sam(50));



// function sam(n1,n2){
// console.log(n1); //50
// console.log(n2); //undefined
    
// }
// //console.log(sam(30)); //kuch nahi return ho raha undefined


// //default parameterise function 
// function sam2(n1,n2=40){
// console.log(n1); 
// console.log(n2); 
    
// }
// sam2(15);
// sam2(15,20);



// //default parameterise function 
// function sam2(n1=40,n2){
// console.log(n1); 
// console.log(n2); 
    
// }
// sam2(15);



// -----------------------------------------------



// function calculateGrade(obtained, total) {
// //   if (isNaN(obtained) || isNaN(total) || total <= 0) {
// //     console.log("Invalid input. Please enter valid numbers.");
// //     return;
// //   }

// let percentage = (obtained / total) * 100;
// let grade = "";

// if (percentage >= 91) grade = "A1";
// else if (percentage >= 81) grade = "A2";
// else if (percentage >= 71) grade = "B1";
// else if (percentage >= 61) grade = "B2";
// else if (percentage >= 51) grade = "C1";
// else if (percentage >= 41) grade = "C2";
// else if (percentage >= 33) grade = "D";
// else grade = "E (Fail)";

// console.log("Marks Obtained: " + obtained);
// console.log("Total Marks: " + total);
// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Grade: " + grade);
// }

// // Example usage
// let obtainedMarks = 52;
// let totalMarks = 100;

// calculateGrade(obtainedMarks, totalMarks);







function gradeclculator(marks){
    if(marks>=80){
        return "o+";
    }
    else if(marks>=60){
        return "a+";

    }
    else if(marks>=40){
        return "b+"

    }
    else if(marks>=30){
        return "c"

    }
    else
        return "fail";
}
// gradeclculator(45);
// console.log(gradeclculator(45))
// console.log(gradeclculator('sam'))



//outputbased typecasting

// function summ(num1,num2){
//     return num1+num2;
// }
// console.log(summ(10,20));


function summ(num1,num2){
    return num1+num2;
}
// console.log(summ(10,'sam'));
// let ans = summ(10,true);
// let ans = summ(10,false);
// console.log(typeof(ans));
// let ans = summ('100',true);
// console.log(ans);













































