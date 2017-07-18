function rightArrow(){
        if(prevKeyCode != 37){
          right();
          prevKeyCode = 39;
        }
        //document.getElementById('debug').innerHTML = "prev: " + prevArrowButton + "<br> current: " + arrowButton;
      }

      function leftArrow(){
        if(prevKeyCode != 39){
            left();
            prevKeyCode = 37;
          }
        
        //document.getElementById('debug').innerHTML = "prev: " + prevArrowButton + "<br> current: " + arrowButton;
      }
      function upArrow(){
        if(prevKeyCode != 40){
            up();
            prevKeyCode = 38;
          }
        //document.getElementById('debug').innerHTML = "prev: " + prevArrowButton + "<br> current: " + arrowButton;
      }

      function downArrow(){
        if(prevKeyCode != 38){
            down();
            prevKeyCode = 40;
          }
        //document.getElementById('debug').innerHTML = "prev: " + prevArrowButton + "<br> current: " + arrowButton;
      }


      function moveSelection(event) {                    
        switch (event.keyCode) {
          case 39:
            if(prevKeyCode != 37){
              right();
              prevKeyCode = event.keyCode;
            }
            break;
          case 37:
            if(prevKeyCode != 39){
              left();
              prevKeyCode = event.keyCode;
            }
            break;
          case 38:
          if(prevKeyCode != 40){
            up();
            prevKeyCode = event.keyCode;
          }
          break;
          case 40:
            if(prevKeyCode != 38){
              down();
              prevKeyCode = event.keyCode;
            }
            break;
          case 50:
            if(prevKeyCode != 56){
              down();
              prevKeyCode = event.keyCode;
            }
            break;
          case 52:
            if(prevKeyCode != 54){
              left();
              prevKeyCode = event.keyCode;
            }
            break;
          case 54:
            if(prevKeyCode != 52){
              right();
              prevKeyCode = event.keyCode;
            }
          break;
          case 56:
            if(prevKeyCode != 50){
              up();
              prevKeyCode = event.keyCode;
            }
            break;
          case 16:
            stop();
            break;
          }
        }