
// galat tarika hai

// function step1(){
//     setTimeout(function(){
//         console.log('image select kar raha haun')
//         return 'image';
//     },4000)
// }




// function step2(image){
//     setTimeout(function(){
//         console.log(`koiek  achha kar raha ${image}hun rukja`)
//         return 'nice image';
//     },2000)
// }


// function step3(fiterimage){
//     setTimeout(function(){
//         console.log(`image ka achha ${fiterimage}sa caption`)
//         return 'image or caption dono';
//     },3000)
// }


// function step4(final){
//     setTimeout(function(){
//         console.log(`${final} uploaded`)
      
//     },2000)
// }

// let image = step1();
// let fiterimage = step2(image);
// let finalimage = step3(fiterimage)
// step4(finalimage);



// better way

function step1(fn){
    setTimeout(function(){
        console.log('selecting image');
        
        fn('image')
    },400)
}


function step2(){
    setTimeout(function(){
        console.log(`appling filter to ${image}`)
    },2000)
    
}

function step3(filterimage){
    setTimeout(function(){
        console.log(`badiyasa caption ${filterimage}`)
    })
}
function step4(){
    setTimeout(function)
}

step1(function(image){
    step2(image,function(filterimage){
        step3(filterimage,function(finalimage)){
            step4(finalimage)
        }
    });
})



