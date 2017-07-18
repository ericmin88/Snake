function frame(){
        if(prevKeyCode == 37 || prevKeyCode == 52){
          x -= 20;
          snakeMoveSound();
          positionArrayY.unshift(y);
          positionArrayX.unshift(x);
          positionArrayX.pop();
          positionArrayY.pop();
          ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
          //document.getElementById('debug').innerHTML = x + "<br>" + y;
          ctx.beginPath();
          ctx.fillRect(positionArrayX[0], positionArrayY[0], scale, scale);
          ctx.fillStyle="green";
          ctx.fill();
          snakeDeath();
          snakeDeathByObject();
          if(x == foodX && y == foodY){
            createSoundEating();
            tail();
            createFood();
            levelUp();
            score+=25;
            if(score > localStorage.highScore){
              localStorage.highScore = score;
            }
            document.getElementById('score').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score + "<br> level " + level;
            document.getElementById('smallScore').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score;
          };
        }else if(prevKeyCode == 39 || prevKeyCode == 54){
          x += 20;
          snakeMoveSound();
          positionArrayY.unshift(y);
          positionArrayX.unshift(x);
          positionArrayX.pop();
          positionArrayY.pop();
          ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
          //document.getElementById('debug').innerHTML = x + "<br>" + y;
          ctx.beginPath();
          ctx.fillRect(positionArrayX[0], positionArrayY[0], scale, scale);
          ctx.fillStyle="green";
          ctx.fill();
          snakeDeath();
          snakeDeathByObject();
          if(x == foodX && y == foodY){
            createSoundEating();
            tail();
            createFood();
            levelUp();
            score+=25;
            if(score > localStorage.highScore){
              localStorage.highScore = score;
            }
            document.getElementById('score').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score + "<br> level " + level;
            document.getElementById('smallScore').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score;
          }
        }else if(prevKeyCode == 38 || prevKeyCode == 56){
          y -= 20;
          snakeMoveSound();
          positionArrayY.unshift(y);
          positionArrayX.unshift(x);
          positionArrayX.pop();
          positionArrayY.pop();
          ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
         //document.getElementById('debug').innerHTML = x + "<br>" + y;
          ctx.beginPath();
          ctx.fillRect(positionArrayX[0], positionArrayY[0], scale, scale);
          ctx.fillStyle="green";
          ctx.fill();
          snakeDeath();
          snakeDeathByObject();
          if(x == foodX && y == foodY){
            createSoundEating();
            tail();
            createFood();
            levelUp();
            score+=25;
            if(score > localStorage.highScore){
              localStorage.highScore = score;
            }
            document.getElementById('score').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score + "<br> level " + level;
            document.getElementById('smallScore').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score;
          }
        }else if(prevKeyCode == 40 || prevKeyCode == 50){
          y += 20;
          snakeMoveSound();
          positionArrayY.unshift(y);
          positionArrayX.unshift(x);
          positionArrayX.pop();
          positionArrayY.pop();
          ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
          //document.getElementById('debug').innerHTML = x + "<br>" + y;
          ctx.beginPath();
          ctx.fillRect(positionArrayX[0], positionArrayY[0], scale, scale);
          ctx.fillStyle="green";
          ctx.fill();
          snakeDeath();
          snakeDeathByObject();
          if(x == foodX && y == foodY){
            createSoundEating();
            tail();
            createFood();
            levelUp();
            score+=25;
            if(score > localStorage.highScore || localStorage.highScore==null){
              localStorage.highScore = score;
          }
            document.getElementById('score').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score + "<br> level " + level;
            document.getElementById('smallScore').innerHTML = "HIGH SCORE: " + localStorage.highScore + "<br>SCORE: " + score;
          }
        }
      }