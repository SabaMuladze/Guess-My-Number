const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const lblScr = document.querySelector('.label-score');
const score = document.querySelector('.label-score .score')
const HighScr = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const numDV = document.querySelector('.number');
const again = document.querySelector('.again')

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100) + 1;

    return randomNum
}

score.innerHTML = 20;

checkBtn.addEventListener('click', () => {
    if (guessInput.value == '') {
        message.innerHTML = 'Start guessing...';
    }
    else if (guessInput.value > 100) {
        message.innerHTML = '🔴 TOP is 100 🔴';
    }
    else if (randomNum < guessInput.value) {
        message.innerHTML = '📈 Too high!';
        score.innerHTML -= 1;
    }
    else if (randomNum > guessInput.value) {
        message.innerHTML = '📉 Too low!';
        score.innerHTML -= 1;

        if (score.textContent < 1) {
            message.innerHTML = '😭 You Lost 😭';
            score.innerHTML = 0;
            document.body.style.backgroundColor = 'red';

        }

    }
    else if (randomNum == guessInput.value) {
        message.innerHTML = '🎉 Correct number!';
        numDV.innerHTML = randomNum;
        document.body.style.backgroundColor = '#60b347';

        if (score.innerHTML > HighScr.innerHTML) {
            HighScr.innerHTML = score.innerHTML;
        }
    }

})
again.addEventListener('click', () => {
    message.innerHTML = 'Start guessing...';
    numDV.innerHTML = '?';
    document.body.style.backgroundColor = '#222';
    randomNum = Math.floor(Math.random() * 100) + 1;
    score.innerHTML = 20;

})

let randomNum = randomNumber();





