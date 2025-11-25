const coin = document.getElementById('coin');
const flip = document.getElementById('flip');
const outcome = document.getElementById('outcome');

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