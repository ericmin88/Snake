function createObject(){
	if(level == 5){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

	        rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
	        rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                for(var i = 0;i<positionArrayX.length;i++){
		        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i]){
			        ctx.beginPath();
			        ctx.fillStyle="black";
        		        ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
        		        ctx.fillStyle="black";
        		        ctx.fill();

        		        ctx.fillStyle="green";
        		}else{
        			createObject();
        		}
        	}
        }else if(level == 9){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

                objectXTwo = Math.floor((Math.random() * canvasWidth));
                objectYTwo = Math.floor((Math.random() * canvasHeight));
                objectXTwo = objectXTwo - (objectXTwo % scale);
                objectYTwo = objectYTwo - (objectYTwo % scale);

                rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
                rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                rockObjectXTwo = [objectXTwo,(objectXTwo+20),(objectXTwo+40),objectXTwo,(objectXTwo+20),(objectXTwo+40)];
                rockObjectYTwo = [objectXTwo,objectXTwo,objectXTwo,(objectXTwo+20),(objectXTwo+20),(objectXTwo+20)];

                for(var i = 0;i<positionArrayX.length;i++){
                        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i] && positionArrayX[i] != rockObjectXTwo[i] || positionArrayY[i] != rockObjectYTwo[i]){
                                ctx.beginPath();
                                ctx.fillStyle="black";
                                ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
                                ctx.fillRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
                                ctx.fillStyle="black";
                                ctx.fill();


                                ctx.fillStyle="green";
                        }else{
                                createObject();
                        }
                }
        }else if(level == 14){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

                objectXTwo = Math.floor((Math.random() * canvasWidth));
                objectYTwo = Math.floor((Math.random() * canvasHeight));
                objectXTwo = objectXTwo - (objectXTwo % scale);
                objectYTwo = objectYTwo - (objectYTwo % scale);

                objectXThree = Math.floor((Math.random() * canvasWidth));
                objectYThree = Math.floor((Math.random() * canvasHeight));
                objectXThree = objectXThree - (objectXThree % scale);
                objectYThree = objectYThree - (objectYThree % scale);

                rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
                rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                rockObjectXTwo = [objectXTwo,(objectXTwo+20),(objectXTwo+40),objectXTwo,(objectXTwo+20),(objectXTwo+40)];
                rockObjectYTwo = [objectXTwo,objectXTwo,objectXTwo,(objectXTwo+20),(objectXTwo+20),(objectXTwo+20)];
                rockObjectXThree = [objectXThree,(objectXThree+20),(objectXThree+40),objectXThree,(objectXThree+20),(objectXThree+40)];
                rockObjectYThree = [objectXThree,objectXThree,objectXThree,(objectXThree+20),(objectXThree+20),(objectXThree+20)];


                for(var i = 0;i<positionArrayX.length;i++){
                        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i] && positionArrayX[i] != rockObjectXTwo[i] || positionArrayY[i] != rockObjectYTwo[i] && positionArrayX[i] != rockObjectXThree[i] || positionArrayY[i] != rockObjectYThree[i]){
                                ctx.beginPath();
                                ctx.fillStyle="black";
                                ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
                                ctx.fillRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
                                ctx.fillRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
                                ctx.fillStyle="black";
                                ctx.fill();


                                ctx.fillStyle="green";
                        }else{
                                createObject();
                        }
                }
        }else if(level == 19){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

                objectXTwo = Math.floor((Math.random() * canvasWidth));
                objectYTwo = Math.floor((Math.random() * canvasHeight));
                objectXTwo = objectXTwo - (objectXTwo % scale);
                objectYTwo = objectYTwo - (objectYTwo % scale);

                objectXThree = Math.floor((Math.random() * canvasWidth));
                objectYThree = Math.floor((Math.random() * canvasHeight));
                objectXThree = objectXThree - (objectXThree % scale);
                objectYThree = objectYThree - (objectYThree % scale);

                objectXFour = Math.floor((Math.random() * canvasWidth));
                objectYFour = Math.floor((Math.random() * canvasHeight));
                objectXFour = objectXFour - (objectXFour % scale);
                objectYFour = objectYFour - (objectYFour % scale);

                rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
                rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                rockObjectXTwo = [objectXTwo,(objectXTwo+20),(objectXTwo+40),objectXTwo,(objectXTwo+20),(objectXTwo+40)];
                rockObjectYTwo = [objectXTwo,objectXTwo,objectXTwo,(objectXTwo+20),(objectXTwo+20),(objectXTwo+20)];
                rockObjectXThree = [objectXThree,(objectXThree+20),(objectXThree+40),objectXThree,(objectXThree+20),(objectXThree+40)];
                rockObjectYThree = [objectXThree,objectXThree,objectXThree,(objectXThree+20),(objectXThree+20),(objectXThree+20)];
                rockObjectXFour = [objectXFour,(objectXFour+20),(objectXFour+40),objectXFour,(objectXFour+20),(objectXFour+40)];
                rockObjectYFour = [objectYFour,objectYFour,objectYFour,(objectYFour+20),(objectYFour+20),(objectYFour+20)];

                for(var i = 0;i<positionArrayX.length;i++){
                        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i] && positionArrayX[i] != rockObjectXTwo[i] || positionArrayY[i] != rockObjectYTwo[i] && positionArrayX[i] != rockObjectXThree[i] || positionArrayY[i] != rockObjectYThree[i]){
                                ctx.beginPath();
                                ctx.fillStyle="black";
                                ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
                                ctx.fillRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
                                ctx.fillRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
                                ctx.fillRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
                                ctx.fillStyle="black";
                                ctx.fill();


                                ctx.fillStyle="green";
                        }else{
                                createObject();
                        }
                }
        } else if(level == 21){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

                objectXTwo = Math.floor((Math.random() * canvasWidth));
                objectYTwo = Math.floor((Math.random() * canvasHeight));
                objectXTwo = objectXTwo - (objectXTwo % scale);
                objectYTwo = objectYTwo - (objectYTwo % scale);

                objectXThree = Math.floor((Math.random() * canvasWidth));
                objectYThree = Math.floor((Math.random() * canvasHeight));
                objectXThree = objectXThree - (objectXThree % scale);
                objectYThree = objectYThree - (objectYThree % scale);

                objectXFour = Math.floor((Math.random() * canvasWidth));
                objectYFour = Math.floor((Math.random() * canvasHeight));
                objectXFour = objectXFour - (objectXFour % scale);
                objectYFour = objectYFour - (objectYFour % scale);

                objectXFive = Math.floor((Math.random() * canvasWidth));
                objectYFive = Math.floor((Math.random() * canvasHeight));
                objectXFive = objectXFive - (objectXFive % scale);
                objectYFive = objectYFive - (objectYFive % scale);

                rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
                rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                rockObjectXTwo = [objectXTwo,(objectXTwo+20),(objectXTwo+40),objectXTwo,(objectXTwo+20),(objectXTwo+40)];
                rockObjectYTwo = [objectXTwo,objectXTwo,objectXTwo,(objectXTwo+20),(objectXTwo+20),(objectXTwo+20)];
                rockObjectXThree = [objectXThree,(objectXThree+20),(objectXThree+40),objectXThree,(objectXThree+20),(objectXThree+40)];
                rockObjectYThree = [objectXThree,objectXThree,objectXThree,(objectXThree+20),(objectXThree+20),(objectXThree+20)];
                rockObjectXFour = [objectXFour,(objectXFour+20),(objectXFour+40),objectXFour,(objectXFour+20),(objectXFour+40)];
                rockObjectYFour = [objectYFour,objectYFour,objectYFour,(objectYFour+20),(objectYFour+20),(objectYFour+20)];
                rockObjectXFive = [objectXFive,(objectXFive+20),(objectXFive+40),objectXFive,(objectXFive+20),(objectXFive+40)];
                rockObjectYFive = [objectYFive,objectYFive,objectYFive,(objectYFive+20),(objectYFive+20),(objectYFive+20)];
                for(var i = 0;i<positionArrayX.length;i++){
                        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i] && positionArrayX[i] != rockObjectXTwo[i] || positionArrayY[i] != rockObjectYTwo[i] && positionArrayX[i] != rockObjectXThree[i] || positionArrayY[i] != rockObjectYThree[i]){

                                ctx.beginPath();
                                ctx.fillStyle="black";
                                ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
                                ctx.fillRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
                                ctx.fillRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
                                ctx.fillRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
                                ctx.fillRect(rockObjectXFive[i],rockObjectYFive[i],scale,scale);
                                ctx.fillStyle="black";
                                ctx.fill();

                                ctx.fillStyle="green";
                        }else{
                                createObject();
                        }
                }
        } else if(level == 24){
                objectXOne = Math.floor((Math.random() * canvasWidth));
                objectYOne = Math.floor((Math.random() * canvasHeight));
                objectXOne = objectXOne - (objectXOne % scale);
                objectYOne = objectYOne - (objectYOne % scale);

                objectXTwo = Math.floor((Math.random() * canvasWidth));
                objectYTwo = Math.floor((Math.random() * canvasHeight));
                objectXTwo = objectXTwo - (objectXTwo % scale);
                objectYTwo = objectYTwo - (objectYTwo % scale);

                objectXThree = Math.floor((Math.random() * canvasWidth));
                objectYThree = Math.floor((Math.random() * canvasHeight));
                objectXThree = objectXThree - (objectXThree % scale);
                objectYThree = objectYThree - (objectYThree % scale);

                objectXFour = Math.floor((Math.random() * canvasWidth));
                objectYFour = Math.floor((Math.random() * canvasHeight));
                objectXFour = objectXFour - (objectXFour % scale);
                objectYFour = objectYFour - (objectYFour % scale);

                objectXFive = Math.floor((Math.random() * canvasWidth));
                objectYFive = Math.floor((Math.random() * canvasHeight));
                objectXFive = objectXFive - (objectXFive % scale);
                objectYFive = objectYFive - (objectYFive % scale);

                objectXSix = Math.floor((Math.random() * canvasWidth));
                objectYSix = Math.floor((Math.random() * canvasHeight));
                objectXSix = objectXSix - (objectXSix % scale);
                objectYSix = objectYSix - (objectYSix % scale);

                rockObjectXOne = [objectXOne,(objectXOne+20),(objectXOne+40),objectXOne,(objectXOne+20),(objectXOne+40)];
                rockObjectYOne = [objectYOne,objectYOne,objectYOne,(objectYOne+20),(objectYOne+20),(objectYOne+20)];
                rockObjectXTwo = [objectXTwo,(objectXTwo+20),(objectXTwo+40),objectXTwo,(objectXTwo+20),(objectXTwo+40)];
                rockObjectYTwo = [objectXTwo,objectXTwo,objectXTwo,(objectXTwo+20),(objectXTwo+20),(objectXTwo+20)];
                rockObjectXThree = [objectXThree,(objectXThree+20),(objectXThree+40),objectXThree,(objectXThree+20),(objectXThree+40)];
                rockObjectYThree = [objectXThree,objectXThree,objectXThree,(objectXThree+20),(objectXThree+20),(objectXThree+20)];
                rockObjectXFour = [objectXFour,(objectXFour+20),(objectXFour+40),objectXFour,(objectXFour+20),(objectXFour+40)];
                rockObjectYFour = [objectYFour,objectYFour,objectYFour,(objectYFour+20),(objectYFour+20),(objectYFour+20)];
                rockObjectXFive = [objectXFive,(objectXFive+20),(objectXFive+40),objectXFive,(objectXFive+20),(objectXFive+40)];
                rockObjectYFive = [objectYFive,objectYFive,objectYFive,(objectYFive+20),(objectYFive+20),(objectYFive+20)];
                rockObjectXSix = [objectXSix,(objectXSix+20),(objectXSix+40),objectXSix,(objectXSix+20),(objectXSix+40)];
                rockObjectYSix = [objectYSix,objectYSix,objectYSix,(objectYSix+20),(objectYSix+20),(objectYSix+20)];
                for(var i = 0;i<positionArrayX.length;i++){
                        if(positionArrayX[i] != rockObjectXOne[i] || positionArrayY[i] != rockObjectYOne[i] && positionArrayX[i] != rockObjectXTwo[i] || positionArrayY[i] != rockObjectYTwo[i] && positionArrayX[i] != rockObjectXThree[i] || positionArrayY[i] != rockObjectYThree[i]){

                                ctx.beginPath();
                                ctx.fillStyle="black";
                                ctx.fillRect(rockObjectXOne[i],rockObjectYOne[i],scale,scale);
                                ctx.fillRect(rockObjectXTwo[i],rockObjectYTwo[i],scale,scale);
                                ctx.fillRect(rockObjectXThree[i],rockObjectYThree[i],scale,scale);
                                ctx.fillRect(rockObjectXFour[i],rockObjectYFour[i],scale,scale);
                                ctx.fillRect(rockObjectXFive[i],rockObjectYFive[i],scale,scale);
                                ctx.fillRect(rockObjectXSix[i],rockObjectYSix[i],scale,scale);
                                ctx.fillStyle="black";
                                ctx.fill();

                                ctx.fillStyle="green";
                        }else{
                                createObject();
                        }
                }
        }
}