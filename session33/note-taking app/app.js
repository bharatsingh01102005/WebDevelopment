
//selecting the input
let titleEl = document.getElementById('title')
//selecting the ul
let listEl = document.getElementById('list')

let addButtonEl =  document.getElementById('add-btn')
addButtonEl.addEventListener('click', function(){
    //extract the value from input

  let titleText = titleEl.value
    //create the li elements for appending
    let li =document.createElement('li');

    //inseting the text insie li fromthe input value
    li.innerText = titleText;
    //newly created li hai usse append karna
    listEl.appendChild(li);

    // clear kar do apne inputs ko

    titleEl.value='';
    // remove the li after clicking li

    li.addEventListener('click',function(){
      li.remove();
    })

     


})