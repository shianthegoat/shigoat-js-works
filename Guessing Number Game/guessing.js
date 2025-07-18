let minNum = 1;
let maxNum = 5;
let randomNumber;
let attempts;
let maxAttempts = 5;
let score;
let baseScore = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const resetButton = document.getElementById('resetButton');
const userScore = document.getElementById('userScore');
const attemptScore = document.getElementById('attemptScore');
const numDisplay = document.getElementById('numDisplay');

function generateNumber() {
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function resetGame() {
    generateNumber();
    attempts = 1;
    score = baseScore;
    userScore.textContent = `Score: ${score}`;
    attemptScore.textContent = `Attempt: ${attempts} / ${maxAttempts}`;
    resultMessage.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    numDisplay.textContent = '?';
}

function getHint() {
    const diff = Math.abs(randomNumber - Number(guessInput.value));
    if (attempts === 2) {
        return randomNumber > guessInput.value ? 'Try higher!' : 'Try lower!';
    } else if (attempts === 3) {
        return `The number is ${randomNumber % 2 === 0 ? 'even' : 'odd'}.`;
    } else if (attempts === 4) {
        return `The number is between ${randomNumber - 5} and ${randomNumber + 5}.`;
    } else if (attempts === 5) {
        return `The number is ${randomNumber}.`;
    }
    return '';
}

guessButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < minNum || guess > maxNum) {
        resultMessage.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        return;
    }
    if (guess === randomNumber) {
        resultMessage.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        numDisplay.textContent = randomNumber;
        guessInput.disabled = true;
        guessButton.disabled = true;
        return;
    } else {
        score--;
        userScore.textContent = `Score: ${score}`;
        if (attempts < maxAttempts) {
            let hint = getHint();
            resultMessage.textContent = `Wrong! ${hint}`;
            attempts++;
            attemptScore.textContent = `Attempt: ${attempts} / ${maxAttempts}`;
        } else {
            resultMessage.textContent = `Game over! The number was ${randomNumber}.`;
            numDisplay.textContent = randomNumber;
            guessInput.disabled = true;
            guessButton.disabled = true;
        }
    }
});

resetButton.addEventListener('click', resetGame);

// Initialize game on load
resetGame();

