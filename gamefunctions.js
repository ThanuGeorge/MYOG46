// choose the first player
function chooseplayer(){

    var rand = Math.round(random(1,2));
    if (rand === 1){
      currplayer = player1;
      currtext = "Computer";
    } else {
      currplayer = player2;
      currtext = "You";
    }
  }
 

  function clickables(){
    box11 = createSprite(100,100,90,90);
    box11.shapeColor = "white";
    box11.visible = false;
    box12 = createSprite(100,200,90,90);
    box12.shapeColor = "white";
    box12.visible = false;
    box13 = createSprite(100,300,90,90);
    box13.shapeColor = "white";
    box13.visible = false;
    box21 = createSprite(200,100,90,90);
    box21.shapeColor = "white";
    box21.visible = false;
    box22 = createSprite(200,200,90,90);
    box22.shapeColor = "white";
    box22.visible = false;
    box23 = createSprite(200,300,90,90);
    box23.shapeColor = "white";
    box23.visible = false;
    box31 = createSprite(300,100,90,90);
    box31.shapeColor = "white";
    box31.visible = false;
    box32 = createSprite(300,200,90,90);
    box32.shapeColor = "white";
    box32.visible = false;
    box33 = createSprite(300,300,90,90);
    box33.shapeColor = "white";
    box33.visible = false;
  }

  function  checkwinplayer1(){
    var win =false;
   
    // horizontal
    for(var i=0; i<3;i++){
      if(available[i][0] === available[i][1] && available[i][1] === available[i][2] 
        && available[i][1] === "X"){
      win =true;
      
      if(i == 0){
        x1= 100;
        y1 = 100;
        x2 = 300;
        y2 = 100;
        }
      if(i == 1){
        x1= 100;
        y1 = 200;
        x2 = 300;
        y2 = 200;
      //  line(100,200,300,200)
      }
      if(i == 2){
        x1= 100;
        y1 = 300;
        x2 = 300;
        y2 = 300;
     //   line(100,300,300,300)
      }
      }
     }  
     //vertical
      for(var j=0; j<3;j++){
      if(available[0][j] === available[1][j] && available[1][j] === available[2][j] 
        && available[1][j] === "X" ){
      win =true;
    
      if(j == 0){
        x1= 100;
        y1 = 100;
        x2 = 100;
        y2 = 300;
      //  line(100,100,100,300)
      }
      if(j == 1){
        x1= 200;
        y1 = 100;
        x2 = 200;
        y2 = 300;
      //  line(200,100,200,300)
      }
      if(j == 2){
        x1= 300;
        y1 = 100;
        x2 = 300;
        y2 = 300;
      //  line(300,100,300,300)
      }
      }
    }
    //diagonal
    if(available[0][0] === available[1][1] && available[1][1] === available[2][2] 
      && available[1][1] === "X")
      {
      win =true;
     
      x1= 100;
      y1 = 100;
      x2 = 300;
      y2 = 300;
     // line(100,100,300,300)
      }
    if(available[2][0] === available[1][1] && available[1][1] === available[0][2] 
      && available[1][1] === "X"){
      win =true;
    
      x1= 100;
      y1 = 300;
      x2 = 300;
      y2 = 100;
     // line(100,300,300,100)
       }
    if(win){
      gamestate = "end"
     message = "Player1 WINS!!!"
     
    }
    

  }
  function  checkwinplayer2(){
    var win;
      // horizontal
      for(var i=0; i<3;i++){
        if(available[i][0] === available[i][1] && available[i][1] === available[i][2] 
          && available[i][1] === "O"){
        win =true;
        
        if(i == 0){
          x1= 100;
          y1 = 100;
          x2 = 300;
          y2 = 100;
          }
        if(i == 1){
          x1= 100;
          y1 = 200;
          x2 = 300;
          y2 = 200;
        //  line(100,200,300,200)
        }
        if(i == 2){
          x1= 100;
          y1 = 300;
          x2 = 300;
          y2 = 300;
       //   line(100,300,300,300)
        }
        }
       }  
       //vertical
        for(var j=0; j<3;j++){
        if(available[0][j] === available[1][j] && available[1][j] === available[2][j] 
          && available[1][j] === "O" ){
        win =true;
      
        if(j == 0){
          x1= 100;
          y1 = 100;
          x2 = 100;
          y2 = 300;
        //  line(100,100,100,300)
        }
        if(j == 1){
          x1= 200;
          y1 = 100;
          x2 = 200;
          y2 = 300;
        //  line(200,100,200,300)
        }
        if(j == 2){
          x1= 300;
          y1 = 100;
          x2 = 300;
          y2 = 300;
        //  line(300,100,300,300)
        }
        }
      }
      //diagonal
      if(available[0][0] === available[1][1] && available[1][1] === available[2][2] 
        && available[1][1] === "O")
        {
        win =true;
       
        x1= 100;
        y1 = 100;
        x2 = 300;
        y2 = 300;
       // line(100,100,300,300)
        }
      if(available[2][0] === available[1][1] && available[1][1] === available[0][2] 
        && available[1][1] === "O"){
        win =true;
      
        x1= 100;
        y1 = 300;
        x2 = 300;
        y2 = 100;
       // line(100,300,300,100)
         }
      if(win){
        gamestate = "end"
       message = "Player2 WINS!!!"
       
      }
      
  
  }