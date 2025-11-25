const coin = document.getElementById('coin');
const flip = document.getElementById('flip');
const outcome = document.getElementById('outcome');

flip.addEventListener('click', function () {

    function flipCoin () {
        return Math.floor(Math.random() * 2);
    }

    if(flipCoin() === 0) {
        coin.textContent = '( heads )'
        outcome.textContent = 'You got heads!'
    } else {
        coin.textContent = '( tails )'
        outcome.textContent = 'You got tails!'
    }
});