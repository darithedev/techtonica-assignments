const coin = document.getElementById('coin');
const flip = document.getElementById('flip');
const outcome = document.getElementById('outcome');

const coins = document.getElementById('coins');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const flippedCoins = document.getElementById('flippedCoins');
const reset = document.getElementById('reset');

let coinArr = ['heads', 'tails'];
let coinStack = [];

function flipCoin () {
    return Math.floor(Math.random() * coinArr.length);
}

flip.addEventListener('click', function () {

    if(flipCoin() === 0) {
        coin.textContent = '( heads )'
        outcome.textContent = 'You got heads!'
    } else {
        coin.textContent = '( tails )'
        outcome.textContent = 'You got tails!'
    }
}); 

increase.addEventListener('click', function () {
    coins.value++;
});

decrease.addEventListener('click', function () {
    coins.value--;
});

function flipCoins() {
    const coinsToFlip = coins.value;

    for (let i = 1; i <= coinsToFlip; i++) {
        if(flipCoin() === 0) {
            coinStack.push(coinArr[0]); // heads
        } else {
            coinStack.push(coinArr[1]); // tails
        }
    }

    flippedCoins.textContent = `These are your ${coinsToFlip} flipped coins: \n`;
    coinStack.forEach(function(element, index) {
        flippedCoins.textContent += `Coin ${index + 1}: ( ${element} ) \n\n`
    });
}

reset.addEventListener('click', function () {
    coins.value = 0;
    outcome.textContent = '';
    flippedCoins.textContent = '';
});