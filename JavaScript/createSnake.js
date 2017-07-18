function createSnake(){
    for(var i = 0; i < positionArrayX.length;i++){
        ctx.beginPath();
        ctx.fillRect(positionArrayX[i], positionArrayY[i], scale, scale);
        ctx.fillStyle="green";
        ctx.fill();
    }
}