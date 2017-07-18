function levelUp(){
	level++;
	if(level == 2){
		frameRate -= 5;

	}else if(level == 3){
		frameRate -= 5;

	}else if(level == 4){
		frameRate -= 5;

	}else if(level == 5){
		 createObject();
		
	}else if(level == 6){
		for(var i = 0;i<rockObjectXOne.length;i++){
			ctx.clearRect(rockObjectXOne[i], rockObjectYOne[i], scale, scale);
        }
		frameRate -= 5;

	}else if(level == 7){
		frameRate -= 5;

	}else if(level == 8){
		frameRate -= 5;

	}else if(level == 9){
		createObject();

	}else if(level == 10){
		for(var i = 0;i<rockObjectXOne.length;i++){			
			ctx.clearRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
			ctx.clearRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
        }
		frameRate -= 5;

	}else if(level == 11){
		frameRate -= 5;

	}else if(level == 12){
		frameRate -= 5;

	}else if(level == 13){
		frameRate -= 5;

	}else if(level == 14){
		createObject();

	}else if(level == 15){
		for(var i = 0;i<rockObjectXOne.length;i++){
			ctx.clearRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
			ctx.clearRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
			ctx.clearRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
        }
		frameRate -= 5;

	}else if(level == 16){
		frameRate -= 5;

	}else if(level == 17){
		frameRate -= 5;

	}else if(level == 18){
		frameRate -= 5;

	}else if(level == 19){
		createObject();

	}else if(level == 20){
		for(var i = 0;i<rockObjectXOne.length;i++){
			ctx.clearRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
			ctx.clearRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
			ctx.clearRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
			ctx.clearRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
        }
		frameRate -= 5;
	}else if(level == 21){

		createObject();

	}else if(level == 22){
		for(var i = 0;i<rockObjectXOne.length;i++){
			ctx.clearRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
			ctx.clearRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
			ctx.clearRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
			ctx.clearRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
			ctx.clearRect(rockObjectXFive[i],rockObjectYFive[i],scale,scale);
        }
		frameRate -= 5;
	}else if(level == 23){
		frameRate -= 5;

	}else if(level == 24){

		createObject();

	}else if(level == 25){
		for(var i = 0;i<rockObjectXOne.length;i++){
			ctx.clearRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
			ctx.clearRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
			ctx.clearRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
			ctx.clearRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
			ctx.clearRect(rockObjectXFive[i],rockObjectYFive[i],scale,scale);
			ctx.clearRect(rockObjectXSix[i],rockObjectYSix[i],scale,scale);
        }
		frameRate -= 5;
	}
}