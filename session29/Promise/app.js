// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // let data = "hello lokesh bhai kaisa hai ";
//         // // resolve(data); // success case

//         // let err = "oops dikkat aagyi";
//         // reject(err); // error case
//         resolve("hii me resolve ho gya hun")
//         // reject("hii me loot gya barbaad ho gya")
//     }, 3000);
// });

// // Success handle
// promise.then(function(data) {
//     console.log(data);
// });

// // Error handle
// promise.catch(function(err) {
//     console.log(err);
// });





// let p1=new Promise((resolve,reject)=>{
//     console.log("3 second ke wait ke baad kaam process ho jaayega");
//     setTimeout(()=>{
//         // resolve();
//         reject()
//     },3000)
// })


//p1.then().catch

// p1.then( ()=>{
//     console.log("kaam ka process ho gya")
// })
// p1.catch( ()=>{
//     console.log("error aa gya")
// })





// .then chainning() // ye problem arise kar rahi hai baar baar then likhna pad raha hai


let p1 = new Promise((resolve,reject)=>{
    console.log("3 seconds ka wait karo")
    setTimeout(()=>{
        resolve();
        // reject();
    },3000)
});


p1.then(()=>{
    return new Promise((resolve,reject)=>{
        //console.log("promise run kardiya hai intzaar karo ab")
        setTimeout(()=>{
            console.log("2 second ho gye bhai shab")
            resolve();
        },2000)
    })
})
.then(()=>{
    console.log("dono kaam ho gye mere");
})




