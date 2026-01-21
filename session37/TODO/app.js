
//adding a new tod
$('input').keypress(function(e) {
    if(e.which ===13){
        const todoText = $(this).val();
        //console.log(todoText)
        $('#list').append(`<li>${todoText}</li>`)
        $(this).val('');

    }
});

//mark as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('complete');
})
 //delete todo
 $('ul').on('click','span', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    })
 })


 //toggle input

 $('#plus').click(function(){
    $('input').fadeToggle();
 })