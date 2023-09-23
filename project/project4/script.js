{
//     const btn = document.querySelector("#btn")
// const guessNumber = parseInt(document.querySelector("#number"))
// let lastResult = document.querySelector("#last")
// let remain = document.querySelector("#remain")

// let rand = parseInt(Math.random()*100+1)
// // console.log(rand);
// let preGuess = []
// let guessLeft = 0
// let playGame = true


// // remain.innerHTML = rem

// btn.addEventListener("click", () => {
//     // let number = guessNumber.value;
//     if(playGame){
//         if(guessNumber === rand){
//             right

//         // }else if(guessNumber <= rand){
//         }else{
//             preArr.push(guessNumber)
//             pre.innerHTML = remain
            
//         }

//         if(guessLeft == 9){
//             playGame = false
//         }
//     }
    
//     // const rem = rem - 1
//     // remain.innerHTML = rem

// })
}

// element selection
const btn = document.querySelector("#btn");
const userInp = document.querySelector("#number");
const preguss = document.querySelector("#last");
const remain = document.querySelector("#remain");
const msg = document.querySelector("#message");
const startOver = document.querySelector(".resultPara");

// create element
const p = document.createElement('p');

// variable creation
let rand = parseInt(Math.random() * 100 +1);
let preGuess = [];
// let guessRem = 0; **
let guessRem = (remain.innerHTML);
let playGame = true;

if(playGame){
    btn.addEventListener("click", (e) =>{
        e.preventDefault();

        const inpt = parseInt(userInp.value);
        inptValidate(inpt);
    })
}

//function section
function inptValidate(value) {
    if(isNaN(value)){
        showMessage("Please enter a number!");

    }else if(value < 1 || value > 100){
        showMessage("Please enter a number between 1 to 100!");
        
    }else{
        preGuess.push(value);

        // if(guessRem === 10){ **
        guessRem--;

        if(!guessRem){
            showGuess(value);
            showMessage(`Game Over. Correct number is ${rand}`);
            endGame();
        }else{
            showGuess(value);
            checkGuess(value);
        }
    }
}

function checkGuess(value){
    if(value < rand){
        showMessage(`Number is Too High than ${value}`);
    }else if(value > rand){
        showMessage(`Number is Too low than ${value}`);
    }else{
        showMessage(`Right Guess.`);
        endGame();
    }
}

function showGuess(guess) {
    userInp.value = "";
    preguss.innerHTML += `${guess}  `;

    // guessRem++; ** position changed^
    // remain.innerHTML = `${10 - guessRem}`; **

    remain.innerHTML = `${guessRem}`;
}

function showMessage(message) {
    // p.appendChild(document.createTextNode(message));
    // msg.appendChild(p)
    msg.innerHTML = `<h2> ${message} </h2>`;
}

function endGame(){
    userInp.value = '';
    userInp.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e) =>{
        
        rand = parseInt(Math.random() * 100 +1);
        preGuess = [];
        guessRem = 10
        preguss.innerHTML = '';
        userInp.removeAttribute('disabled', '');
        startOver.removeChild(p);
        showMessage('');
        playGame = true;
    })
}