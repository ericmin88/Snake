function tail(){
        if(prevKeyCode == 37 || prevKeyCode == 52){
            positionArrayY.push(y);
            positionArrayX.push(x);
            ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
            for(var i = 0; i < positionArrayX.length;i++){
              ctx.beginPath();
              ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
              ctx.fillStyle="green";
              ctx.fill();
            }
          }else if (prevKeyCode == 38 || prevKeyCode == 56){
            positionArrayX.push(x);
            positionArrayY.push(y);
            ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
            for(var i = 0; i < positionArrayX.length;i++){
              ctx.beginPath();
              ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
              ctx.fillStyle="green";
              ctx.fill();
            }
          }else if(prevKeyCode == 39 || prevKeyCode == 54){
            positionArrayY.push(y);
            positionArrayX.push(x);
            ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
            for(var i = 0; i < positionArrayX.length;i++){
              ctx.beginPath();
              ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
              ctx.fillStyle="green";
              ctx.fill();
            }
          }else if(prevKeyCode == 40 || prevKeyCode == 50){
            positionArrayX.push(x);
            positionArrayY.push(y);
            ctx.clearRect(positionArrayX[positionArrayX.length-1], positionArrayY[positionArrayY.length-1], scale, scale);
            for(var i = 0; i < positionArrayX.length;i++){
              ctx.beginPath();
              ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
              ctx.fillStyle="green";
              ctx.fill();
            }
          }
      }
