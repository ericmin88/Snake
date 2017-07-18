      function createFood(){
          foodX = Math.floor((Math.random() * canvasWidth));
          foodY = Math.floor((Math.random() * canvasHeight));
          foodX = foodX - (foodX % scale);
          foodY = foodY - (foodY % scale);
          
          //document.getElementById('debug').innerHTML = "Width: " + foodX + "<br> height: " + foodY;
          for(var i = 0; i < positionArrayX.length; i++){
            if(foodX != positionArrayX[i] || foodY != positionArrayY[i]){
              ctx.fillStyle="darkred";
              ctx.beginPath();
              ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
              ctx.fillStyle="darkred";
              ctx.fill();
              ctx.fillStyle="darkred";
              

              
            }else{
              createFood();
            }
          }
          
      }