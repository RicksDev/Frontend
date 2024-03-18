'use strict';

// Declaração de variáveis para o número secreto, pontuação e pontuação máxima.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Função para exibir mensagens no documento.
const showMessage = (message) => {

    document.querySelector('.message').textContent = message;

};

// Event listener para o botão "Jogar Novamente".
document.querySelector('.again').addEventListener('click', () => {

    // Reinicializa a pontuação e gera um novo número secreto.
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reseta estilos e textos no documento.
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    showMessage("Comece a adivinhar...");

});

// Event listener para o botão "Verificar".
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // Verifica se a pontuação é maior que 1.
    if (score > 1) {

        // Verifica se o valor inserido é um número.
        if (!guess) {
            showMessage("Digite um Número!!!");
        } else if (secretNumber == guess) {
            showMessage("Número correto!");
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";

            // Exibe o número secreto e atualiza a pontuação máxima.
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
