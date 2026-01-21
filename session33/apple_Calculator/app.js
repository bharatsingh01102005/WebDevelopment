


let buttons = document.querySelectorAll('button')
let input = document.querySelector('input')


for(let button of buttons){
    button.addEventListener('click',function(event){
        let btnText = event.target.innerText;
        if(btnText == 'C'){
            input.value=' ';
        }else if(btnText=== '='){

            try{
            input.value=eval(input.value)
            }
            catch(error){
                
            input.value = 'hat baklol'
            }
        }
        else{
        input.value+=btnText;
        }
    })
}