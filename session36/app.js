
//selecting Elements
//tag
// console.log($('h1'));
//class
// console.log($('.sam'))
// //id
// console.log($('#sam'))




//manipulate elements

//css adding
//single css property

// $('h1').css('color','red');
// $('h1').css('background-color','yellow');

//multiple properties

// $('h1').css({
//     color:'red',
//     backgroundColor:'plum'
// })

//access Text


// console.log($('p').text('<em>sanorita</em>')); //text is method--textcontent
// console.log($('p').html()) //text method - inner html
// console.log($('p').html('<em>sanorita</em>')); //text method --innerHTML



//console.log($('p').html()); //text method --inner html
//console.log($('p).html('<em>sanorita</em>')) --//text method inner html

//manipulating attributes



// console.log($('a').text());
// console.log($('a').attr('href'))//getter
// console.log($('a').attr('href','http://facebook.com'))


//selecting particular elements out of all


// $('h1:nth-of-type(4)').css('border','2px solid plum');
// $('h1:firstChild').css('border','2px solid plum'); //wrong
// $('h1:lastChild').css('border','2px solid plum');  //wrong
// $('h1:first()').css('border','2px solid plum');   //right
// $('h1:last()').css('border','2px solid plum');    //right

// $('h1:last()').css('border','20px solid plum'); 
// $('h1').last().css('border','20px solid plum');  //alternative way

// $('h1').first().css('border','20px solid plum'); //alternative way


//getting vaue of inputs------




// console.log($('input').val());


//manipulting class attributes
// $('h1').first().addClass('first'); //single class

// //adding class

// $('h1').first().addClass('first second third');

// //removeClass()
// $('h1').first().removeClass('first third');

// //toggleClass


// $('h1').first().toggleClass('first sam');


// //hash class

// $('h1').first().hasClass('first second third');


//events

//click
// $('button').click(function(){
//     console.log("master ji pitaji ki patllon ek bladd kam kar do")

// })

//new concept and important // 'this'
// 'this' is NOT SAME as that of your js //  'this' alag hai
//event.target==this (same kaaam karega almost)
//'this'  point s to element over is the event is being triggered
//make sure never use arrow function it does not work here


// $('li').click(function(){
//     $(this).css('color','cyan')
// })



//input---


// $('input').keyup(function(){
//     console.log($(this).val());
// })


//addEventListener --> 'on'

// $('button).on('click',function(){
// console.log("master ji ki patloon 1 biland choti kar do")
// })


// $('input').keypress(function(e){
//     // console.log($(this).val());

//     if(e.which==13)
//         console.log($(this).val());
// })

//effects---

$('#fadeout').click(function(){
    $('#container').fadeOut();
})

$('#fadein').click(function(){
    $('#container').fadeIn();
})
$('#fadetoggle').click(function(){
    $('#container').fadeToggle();
})

































































































