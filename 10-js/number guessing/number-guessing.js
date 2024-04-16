// 00 - dichiarazioni di variabili e costanti

//punto 1 ---

let randomNumber = Math.floor(Math.random()*100) +1;

// console.log(randomNumber)

const guesses = document.querySelector(".guesses");

const lastResult = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");

const guessField = document.querySelector(".guessField");

// punto 2

let guessCount = 1;

let guessField.focus();	

// reset

let resetButton;

// 01 Funzione principale

function checkGuess(){


	const userGuess = Number(guessField.value);

	/*
			iniziamo una serie di if per fare delle valutazioni
	*/

	if(guessCount === 1){

		guesses.textContent = 'I miei tentativi:';

	}

	guesses.textContent += `${userGuess}`;


	// se abbiamo vinto

	if (userGuess === randomNumber){

		lastResult.textContent = 'Congratulazioni! Hai indovinato!';

		lastResult.style.backgroundColor = 'green';

		lowOrHi.textContent = '';

		setGameOver();


	}

	// tentativi limite

	else if (guessCount === 10){

		lastResult.textContent = 'Game Over';

		lowOrHi.textContent = '';

		setGameOver();


	}

	// numero sbagliato

	else{

		lastResult.textContent = 'Sbagliato';

		lastResult.style.backgroundColor = 'red';

		if (userGuess < randomNumber){


			lowOrHi.textContent = 'Numero troppo basso';

		}

		else if(userGuess > randomNumber){

			lowOrHi.textContent = 'Numero troppo alto';

		}

	}

	// aumenta di uno

	guessCount++;

	guessField.value = '';

	guessField.focus();

} // chiusura della funzione checkGuess


guessSubmit.addEventListener('click', checkGuess);


//02 funzione per il gameover


function setGameOver(){

	guessField.disabled = true;
	guessSubmit.disabled = true;

	resetButton = document.createElement('Button');
	resetButton.textContent = 'New Game';

	document.body.append(resetButton);
	resetButton.addEventListener('click', resetGame);

	const result = document.createElement('p');
	document.body.append(result);
	result.textContent = 'Il numero era: ' + randomNumber;

}


//03 funzione per il reset


function resetGame(){

	guessCount = 1;
	const resetParas = document.querySelectorAll('.resultParas p');
	// console.log(resetParas);


	for (const resetPara of resetParas){

		resetPara.textContent = '';

	}


	resetButton.parentNode.removeChild(resetButton);
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';

	lastResult.style.backgroundColor = 'white';

	randomNumber = Math.floor(Math.random()*100) +1;
}