function game(){
        stop();
        prevKeyCode = 39;
        gameStart = 0;
        x = 40;
        y = 0;
        score= 0;
        foodX = 0;
        foodY = 0;
        interval = null;
        level = 1;
        frameRate = 180;
        positionArrayX.length = 0;
        positionArrayY.length = 0;
        positionArrayX.unshift(0);
        positionArrayY.unshift(0);
        positionArrayX.unshift(20);
        positionArrayY.unshift(0);
        positionArrayX.unshift(40);
        positionArrayY.unshift(0);
        document.getElementById('score').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br> SCORE: 0" + "<br>Level: 1";
        document.getElementById('smallScore').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br> SCORE: 0";
        creatCanvas();
        createSnake();
        createFood();
        tail();
      }
function createFood(){
          foodX = Math.floor((Math.random() * canvasWidth));
          foodY = Math.floor((Math.random() * canvasHeight));
          foodX = foodX - (foodX % scale);
          foodY = foodY - (foodY % scale);
          
          //document.getElementById('debug').innerHTML = "Width: " + foodX + "<br> height: " + foodY;
          for(var i = 0; i < positionArrayX.length; i++){
            if(foodX != positionArrayX[i] || foodY != positionArrayY[i]){
              ctx.fillStyle="green";
              ctx.clearRect(foodX, foodY,scale,scale);
              ctx.fillRect(foodX, foodY,scale,scale);
            }else{
              createFood();
            }
          }
          
      }