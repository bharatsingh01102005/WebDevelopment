let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');
let cellSize = 50; //height an d width kaa kaam karega each cell ke liye

let boardheight = 600;
let boardwidth = 1000;
let snakeCells = [[0,0]]; //2d array to store starting pioints of snake ka rectangle
let direction = 'right';

let gameOver = false;   // wall se takrane ke baad ho jaye true
let foodCells = gendrateFood(); //because we need two values i.e x and y

let score = 0;





// baar baar repeat ke liye
let intervalId =setInterval(function(){
update()
draw()
},1000)

//keydown event is triggered
document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowDown'){direction = 'down'}
    else if(event.key === 'ArrowUp'){direction = 'up'}
    else if(event.key === 'ArrowLeft'){direction = 'left'}
    else  {direction = 'right'}
})



//fuction draw sanke
function draw(){
    if(gameOver===true){
        clearInterval(intervalId) // it accepts an id
        ctx.fillStyle='red';
        ctx.font = '50px monospace'
        ctx.fillText('Game Over!! ',200,200)
        return;
    }

    ctx.clearRect(0,0,boardwidth,boardheight)
    for(let cell of snakeCells){
        ctx.fillStyle='red'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize)
        ctx.strokeStyle='orange';
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize);

    }
    //draw food
    ctx.fillStyle='green'
    ctx.fillRect(foodCells[0],foodCells[1],cellSize,cellSize)

    //draw score
    ctx.font = "24px monospace"
    ctx.fillText(`Score: ${score}`,20,25)
    


   
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
    if(newHeadX == boardwidth  || khagyaKhudko(newHeadX,newHeadY)){gameOver=true}
}
else if(direction==='left'){
    newHeadX = headX-cellSize;
    newHeadY = headY;
    if(newHeadX<0  || khagyaKhudko(newHeadX,newHeadY)){gameOver=true}
}
else if(direction==='up'){
    newHeadX = headX;
    newHeadY = headY-cellSize;
    if(newHeadY<0  || khagyaKhudko(newHeadX,newHeadY)){gameOver=true}
}
else if(direction==='down'){
    newHeadX = headX;
    newHeadY = headY+cellSize;
     if(newHeadY == boardheight || khagyaKhudko(newHeadX,newHeadY)){gameOver=true}
}
snakeCells.push([newHeadX,newHeadY]);
if(newHeadX === foodCells[0] && newHeadY ===foodCells[1]){
    gendrateFood();
    score+=1;

}else{
    snakeCells.shift();

}




}

function gendrateFood(){
    return [
       Math.round(Math.random()*(boardwidth-cellSize)/cellSize)*cellSize,
       Math.round(Math.random()*(boardheight-cellSize)/cellSize)*cellSize,

    ]
}




function khagyaKhudko(newHeadX,newHeadY){
    //loops
    for (let item of snakeCells){
          if(item[0]===newHeadX && item[1]===newHeadY){
            return true;

          }
    }
    return false;
    
}

























