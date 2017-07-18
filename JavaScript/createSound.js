function createSoundEating(){
	sound = 1;
	if(sound == 1){
		snd = new Audio("../sound/marioCoin.mp3");
		snd.play();
	}
	sound = 0;
}

function createSoundDeath(){
		snd = new Audio("../sound/death.mp3");
		snd.play();
}

function snakeMoveSound(){
	snd = new Audio("../sound/Slime.mp3");
	snd.play();
}