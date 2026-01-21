
// function some(){

// }
// console.log(some())

// let p1 = new function(){

// }
// console.log(p1)

async function some(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 sec ho gye")
            resolve();
        },3000)
    })

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2sec ho gye")
            resolve();
        },2000)
    })
    console.log("dono kaam  ho gye")

}
some();
