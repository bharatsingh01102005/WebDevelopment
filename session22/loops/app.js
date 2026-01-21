
//for loop
for(let i = 0; i<=5; i++){
    for(let j = 0; j<=5; j++){
        if(i==j){
            break;
        }
        console.log(i,j); 
    }

}


//while

let num = 100;
while(num>=0){
    console.log(num);
    num = num -10;
   
}


//for in objects

let array = ['sam','hardik','sachin','mohan']


let person = {
    naam: "sam",
    age: 45,
    isMale: true
}

for(let item in person){
    console.log( `${item} --> ${person[item]}`)
}



//for - of (array,map,list,vectors)

for(let item of array){
    console.log(item)
}



