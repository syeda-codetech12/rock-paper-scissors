let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#your-score");
const compscorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options [randId];
};

const drawGame = () => {
    console.log ("game was draw");
    msg.innerText= "Game was Draw. Play again";
    msg.style.backgroundColor = "rgb(1, 1, 42)";

};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userscorePara.innerText = userScore;
        console.log ("you win");
        msg.innerText=`You Win!, Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorePara.innerText = compScore;
        console.log ("you lose");
        msg.innerText= `You Lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    console.log ("user Choice =", userChoice);
    const compChoice = gencompChoice();
    console.log ("comp Choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame ();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach ((choice) => {
    choice.addEventListener ("click", () => {
        const userChoice = choice.getAttribute ("id");
        playGame(userChoice);
    });
});