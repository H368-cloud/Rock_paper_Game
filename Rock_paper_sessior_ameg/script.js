let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const choices = document.querySelectorAll('.choice')

const msg = document.querySelector('#msg');

const genCompChoice = () => {
    //rock papper sessior
    const option = ['rock','paper','scissors'];
    let randomIdx = Math.floor(Math.random() * 3)
    return option[randomIdx];
}


const drawGame = () => {
     console.log('Draw game')
     msg.innerText = "Draw"
     msg.style.backgroundColor = 'yellow'
}

const showWinner = (userWin) => {
    if(userWin){
        console.log('you win')
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'You win!'
        msg.style.backgroundColor = 'orange';
    }
    else{
        console.log('you lost')
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = 'You lose!'
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) => {
    console.log('User choice is', userChoice)
    //now to generate computer choice
    const compChoice = genCompChoice()
    console.log('computer choice is',compChoice)

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissior paper
            userWin = compChoice === 'paper' ? false : true
        }
        else if(userChoice === 'paper'){
            //scissior rock 
            userWin = compChoice === 'scissors' ? false : true 
        }
        else{
            //rock paper
            userWin = compChoice === 'rock' ? false : true
        }
        showWinner(userWin)
    }
}

  

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener(('click'),() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})