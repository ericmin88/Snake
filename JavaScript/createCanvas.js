function creatCanvas(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
function changeCanvas(){
    if(window.outerWidth<767){
       	var frameRate = 300;
        canvasId.style.width = (window.outerWidth-30) + "px";
        canvasId.style.height = "250px";
    }else{
        canvasId.style.width = "400px";
        canvasId.style.height = "400px";
    }
}