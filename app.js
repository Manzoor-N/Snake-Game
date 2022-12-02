// variable declaration
var CVS=document.getElementById('canvas').getContext("2d")
var sPosx=80
var sPosy=80
var nPosx=0
var nPosy=0
var fPosx=140
var fPosy=140
var snakeTail=[]
var snakeSize=1
var score=0


// onload function
window.onload=function(){
    document.addEventListener("keydown",inputControl)
   game= setInterval(mainGame,200)
}


// main game function
function mainGame(){

document.getElementById("score").innerHTML=score
    
// snake movement

sPosx += nPosx;
sPosy += nPosy;

// control snake movement

if(sPosx>400){
    sPosx=0
}
if(sPosy>400){
    sPosy=0
}
if(sPosx<0){
    sPosx=400
}
if(sPosy<0){
    sPosy=400
}

// backround color
  CVS.fillStyle="black"
  CVS.fillRect(0,0,400,400)


//   gridline

for (var cl=0; cl<400; cl+=20){
    CVS.moveTo(cl,0)
    CVS.lineTo(cl,400)
}
for (var rl=0; rl<400; rl+=20){
    CVS.moveTo(0,rl)
    CVS.lineTo(400,rl)
}

CVS.strokeStyle="grey"
CVS.stroke()

// snake
CVS.fillStyle="yellow"
//CVS.fillRect(sPosx,sPosy,20,20)
for(var i=0; i<snakeTail.length; i++){
    CVS.fillRect(
        snakeTail[i].x,
        snakeTail[i].y,20,20
    )
    if(sPosx == snakeTail[i].x && sPosy== snakeTail[i].y && snakeSize>1){
        clearInterval(game)
    }
}

// fruit
CVS.fillStyle="red"
CVS.fillRect(fPosx,fPosy,20,20)

// if snake eat fruit
 if (sPosx==fPosx && sPosy==fPosy){
    snakeSize++;
    score+=10
    fPosx=Math.floor(Math.random() *20) *20
    fPosy=Math.floor(Math.random() *20) *20
 }
 snakeTail.push({x:sPosx,y:sPosy})
  while(snakeTail.length>snakeSize){
    snakeTail.shift()
  }
}


// input control
function inputControl(e){
    switch(e.keyCode){
        case 38:
            nPosy -=20;
            nPosx=0;
            break;
        case 40:
            nPosy +=20;
            nPosx=0;
            break;
        case 39:
            nPosx +=20;
            nPosy=0;
            break;
        case 37:
            nPosx -=20;
            nPosy=0; 
            break;
    }
}