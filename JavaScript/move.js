function right(){

      if(gameStart == 0){
        if(interval){
          clearInterval(interval);
        }
        interval = setInterval(frame, frameRate);
        frame();
        }
      }
      
      function left(){
        if(gameStart == 0){
          if(interval){
            clearInterval(interval);
          }
          interval = setInterval(frame, frameRate);
          frame();
        }
      }
      
      function up(){
        if(gameStart == 0){
          if(interval){
          clearInterval(interval);
          }
          interval = setInterval(frame, frameRate);
          frame();
        }
      }
      
      function down(){
        if(gameStart == 0){
          if(interval){
            clearInterval(interval);
          }
          interval = setInterval(frame, frameRate);
          frame();
        }
      }
      
      function stop(){
          clearInterval(interval);
      }