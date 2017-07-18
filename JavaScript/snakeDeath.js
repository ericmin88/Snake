function snakeDeath(){
        if(x < 0  || x == canvasWidth || y < 0  || y == canvasHeight){
          stop();
          document.getElementById('score').innerHTML = "GAME OVER!!! Your score is: " + score;
          document.getElementById('smallScore').innerHTML = "GAME OVER!!! Your score is: " + score;
          gameStart = 1;
          createSoundDeath();
        } else if(prevKeyCode == 37 || prevKeyCode == 52){
          for(var i = 1; i < positionArrayX.length-1; i++){
            if(x == positionArrayX[i] && y == positionArrayY[i]){
              stop();
              document.getElementById('score').innerHTML = "GAME OVER!!! Your score is: " + score;
              document.getElementById('smallScore').innerHTML = "GAME OVER!!! Your score is: " + score;
              gameStart = 1;
              createSoundDeath();
            }
          }
        }else if(prevKeyCode == 38 || prevKeyCode == 56){
          for(var i = 1; i < positionArrayY.length-1; i++){
            if(y == positionArrayY[i] && x == positionArrayX[i]){
              stop();
              document.getElementById('score').innerHTML = "GAME OVER!!! Your score is: " + score;
              document.getElementById('smallScore').innerHTML = "GAME OVER!!! Your score is: " + score;
              gameStart = 1;
              createSoundDeath();
            }
          }
        }else if(prevKeyCode == 39 || prevKeyCode == 54){
          for(var i = 1; i < positionArrayX.length-1; i++){
            if(x == positionArrayX[i] && y == positionArrayY[i]){
              stop();
              document.getElementById('score').innerHTML = "GAME OVER!!! Your score is: " + score;
              document.getElementById('smallScore').innerHTML = "GAME OVER!!! Your score is: " + score;
              gameStart = 1;
              createSoundDeath();
            }
          }
        }else if(prevKeyCode == 40 || prevKeyCode == 50){
          for(var i = 1; i < positionArrayY.length-1; i++){
            if(y == positionArrayY[i] && x == positionArrayX[i]){
              stop();
              document.getElementById('score').innerHTML = "GAME OVER!!! Your score is: " + score;
              document.getElementById('smallScore').innerHTML = "GAME OVER!!! Your score is: " + score;
              gameStart = 1;
              createSoundDeath();
            }
          }
        }
      }