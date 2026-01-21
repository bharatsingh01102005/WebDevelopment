let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');
let cellSize = 50; //height an d width kaa kaam karega each cell ke liye

let boardheight = 600;
let boardwidth = 1000;
let snakeCells = [[0,0]]; //2d array to store starting pioints of snake ka rectangle
let direction = 'right';

let gameOver = false;   // wall se takrane ke baad ho jaye true

// baar baar repeat ke liye
let intervalId =setInterval(function(){
update()
draw()


},100)



//keydown event is triggered
document.addEventListener('keydown',function(event){
    console.log(event.key)

    if(event.key === 'ArrowDown'){direction='down'}
    else if(event.key === 'ArrowUp'){direction='up'}
    else if(event.key === 'ArrowLeft'){direction='left'}
    else if(event.key === 'ArrowRight'){direction='right'}

})




//fuction draw sanke
function draw(){
    if(gameOver===true){
        clearInterval(intervalId) // it accepts an id
        return;
    }

    ctx.clearRect(0,0,boardwidth,boardheight)
    for(let cell of snakeCells){
        ctx.fillStyle='red'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize)
    }
   
}


//function update

function update(){
     let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];

    // let newHeadX = headX+cellSize;
    // let newHeadY=headY;

    let newHeadX;
    let newHeadY;

 if(direction==='right'){
    newHeadX = headX+cellSize;
    newHeadY = headY;
    if(newHeadX == boardwidth){gameOver=true}
}
else if(direction==='left'){
    newHeadX = headX-cellSize;
    newHeadY = headY;
    if(newHeadX<0){gameOver=true}
}
else if(direction==='up'){
    newHeadX = headX;
    newHeadY = headY-cellSize;
    if(newHeadY<0){gameOver=true}
}
else if(direction==='down'){
    newHeadX = headX;
    newHeadY = headY+cellSize;
     if(newHeadY == boardheight){gameOver=true}
}

snakeCells.push([newHeadX,newHeadY]);
snakeCells.shift();


}




