const coin = document.getElementById('coin');
const flip = document.getElementById('flip');
const outcome = document.getElementById('outcome');

const coins = document.getElementById('coins');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const flippedCoins = document.getElementById('flippedCoins');
const reset = document.getElementById('reset');

function flipCoin () {
    return Math.floor(Math.random() * 2);
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
}