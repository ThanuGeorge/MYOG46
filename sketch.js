var player1 = "X";
var player2 = "O";
var gamestate ="start";
var currplayer;
var board = [
  [" "," ", " "], 
  [" "," ", " "], 
  [" "," ", " "], 
];
var available = [
  [" "," ", " "], 
  [" "," ", " "], 
  [" "," ", " "], 
];
var alltabs = [];
var x1,y1,x2,y2;
var message;
function preload(){
  XImage = loadImage("x.png");
  YImage = loadImage("y.png");

}
function setup() {
  createCanvas(400,400);
  //randomly choose the first turn player
  chooseplayer();
 // invisible game objects to click on
  clickables();
 //initialize tic tac toe
 
  board = [[box11,box21,box31],[box12,box22,box32],[box13,box23,box33]];
  
}

function draw() {
  background("grey"); 

  // starting display
  if(gamestate === "start"){
    textSize(20);
    fill("black");
    text("Computer is 'X' and you are 'O'", 70,100);
    text("First turn by " + currtext, 100,200);
    
  }
  //wait for gamestart
  if(frameCount === 120){
  gamestate = "play";
  }
  //play game
  if(gamestate === "play"){
  strokeWeight(5);
  //line(50,50,350,50);
  line(50,150,350,150);
  line(50,250,350,250);
  //line(50,350,350,350);
 // line(50,50,50,350);
  line(150,50,150,350);
  line(250,50,250,350);
 

 
  imageMode(CENTER);
  if (currplayer === player1){
     var n = 0;
    if (n<9){
     do {
      var ii = Math.round(random(0,2));
      var jj = Math.round(random(0,2));
      n++
      } while(available[ii][jj] !== " ")
    }
    if (available[ii][jj] === " "){
        
          available[ii][jj] = "X";
          board[ii][jj].visible = true;
          board[ii][jj].addImage("x",XImage);
          
         
    }
    for(var i=0; i<3;i++){
      for(var j=0; j<3; j++){
          if(available[i][j] === " " &&  currplayer === player1){
             currplayer = player2;
          }
         }
     }  
     checkwinplayer1();
  }
  if (currplayer === player2){
    text("click its your turn",100,20);
    for(var i=0; i<3;i++){
      for(var j=0; j<3; j++){
          if(mousePressedOver(board[i][j]) && available[i][j] === " "){

            available[i][j] = "O";
            board[i][j].visible = true;
            board[i][j].addImage("y",YImage);
            currplayer = player1;
          }
            
      }
    }
    checkwinplayer2();
    
  }
  drawSprites();

  }
  if(gamestate === "end"){
    strokeWeight(5);
    //line(50,50,350,50);
    line(50,150,350,150);
    line(50,250,350,250);
    //line(50,350,350,350);
   // line(50,50,50,350);
    line(150,50,150,350);
    line(250,50,250,350);
   
  
   
    imageMode(CENTER);
    drawSprites();
   
    textSize(25);
    fill("blue");
    text(message,140,40)
    stroke("red");
    strokeWeight(6);
    line(x1,y1,x2,y2);
  }
}
