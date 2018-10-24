var randomNumber=Math.floor((Math.random()*101));
console.log(randomNumber);

var guessField=document.querySelector('.guessField');
console.log(guessField);
// console.log(guessField.Value);

var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);
// console.log(guesses.Value);
var lowOrHi=document.querySelector(".lowOrHi");
var lastResult=document.querySelector(".lastResult");
var guesses=document.querySelector(".guesses");
console.log(guesses);

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess()
{  // document.write('wfghdgd');
guesses.textContent += guessField.value+" ";
guesses.style.backgroundColor="red";
}
guessSubmit.addEventListener('click', checkGuess);
// checkGuess();

