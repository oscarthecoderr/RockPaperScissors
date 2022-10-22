let botScore=0,
	playerScore=0;

document.getElementById("rock").addEventListener('click',playerThrowsRock);
document.getElementById('paper').addEventListener('click',playerThrowsPaper) 
document.getElementById('scissors').addEventListener('click',playerThrowsScissors)


function playerThrowsRock(){
	let botsWeapon = getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsPaper(){
	let botsWeapon= getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("YOU THE MAN");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

const options=['rock','paper','scissors']

choice[Math.floor(math.random()* options.length)]


