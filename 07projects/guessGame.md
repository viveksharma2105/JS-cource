#Guess-Game


#Solution

```javascript
let randomNumber = Math.floor(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let pvGuess = []
let numberGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();

    const guess = parseInt(userInput.value)
    validGuess(guess)

  })
}


//check value is btw 1-100 or not
function validGuess(guess){
  if(isNaN(guess) || guess === " " || guess <= 0 || guess >100 ){
   alert(`please enter valid number`);
 
  }
  else{
    pvGuess.push(guess)
    if(numberGuess===11){
      displayGuess(guess)
      displayMessage(`Game is over . last guess was ${guess}`)
      endGame()

    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


//value is equel to random no. or not is yss then displaymsg if not then tell me the value is heigh or low
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`YOU WIN 🏆`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is TOO Low . Try again👍 `)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is TOO High. Try again👍`)
  }
}




//value clean for new guess and update remaining chance and array
function displayGuess(guess){
  userInput.value = " "
  guessSlot.innerHTML += `${guess}, `
  numberGuess++
  remaining.innerHTML = `${11 - numberGuess}`

}

 



//print message
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}



//End-Game
function endGame(){
  userInput.value =" "
  userInput.setAttribute('disabled', ' ');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame;

}

//new-Game
function newGame(){
  const newGameButton = document.querySelector('#newGame');
  let randomNumber = Math.floor(Math.random()*100 +1)
pvGuess =[]
numberGuess = 1
guessSlot.innerHTML = " "
remaining.innerHTML = `${11 - numberGuess}`
userInput.removeAttribute('disabled')
StartOver.removeChild(p)
playGame=true;

}


````