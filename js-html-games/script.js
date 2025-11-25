const coin = document.getElementById('coin');
const flip = document.getElementById('flip');
const outcome = document.getElementById('outcome');

flip.addEventListener('click', function () {

    function flipCoin () {
        return Math.floor(Math.random() * 2);
    }

});