let fs = require('fs');

// console.log(fs)
// we will perform CURD (CREATE,READ ,UPDATE,DELETE)

// CREATE or write in file syestem
let data = 'neha mam data send kar rahi hai'
// let data2 = 'rahul sir acche se pad arahe hai'
// fs.writeFile('abc.txt',data,{
//     encoding :'utf-8',
//     flag :  'w'
// },(err)=>{
//     if(err){throw err}
//     console.log("file written sucessfully")

// } )


//or
// fs.writeFileSync('abc.txt',data2)


//------------------------------------
//read
// fs.readFile('abc.txt',{
//     encoding : 'utf-8',
//     flag: 'r',
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data)

// })
//  data = fs.readFileSync('abc.txt');
// // console.log(data);
// console.log(data.toString());



// UPDATE 
// fs.appendFile('abc.txt','samarh ka bhaukal', (err)=>{
//     if(err){throw err }
//     console.log("update kar diya tere bhai ne")
// })


//or

// fs.appendFileSync('abc.txt','aag lage basti me sachin bhai masti me')

//DELETE 

fs.unlink('abc.txt',(err)=>{
    if(err){throw err }
    console.log("mera naam kaalu badmash hai maine delte kar diya")
})