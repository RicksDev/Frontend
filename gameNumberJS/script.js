'use strict';
 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
 
const showMessage = (message) => {
 
    document.querySelector('.message').textContent = message;
 
};
 
document.querySelector('.again').addEventListener('click', () => {
 
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
 
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    showMessage("Start guessing...");
 
});
 
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
 
    if (score > 1) {
 
        if (!guess) {
            showMessage("Digite um Número!!!");
        } else if (secretNumber == guess) {
            showMessage("Número correto!");
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
 
            document.querySelector('.number').textContent = secretNumber;
 
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
 
        } else if (secretNumber != guess) {
            showMessage(secretNumber > guess ? "Número muito baixo'!" : "Número muito alto");
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        showMessage("Você perdeu...!");
        document.querySelector('.score').textContent = 0;
    }
 
});