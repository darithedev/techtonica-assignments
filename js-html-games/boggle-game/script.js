const timer = document.getElementById('timer');
const score = document.getElementById('score');

const boardSetup = document.getElementById('boardSetup')
const board = document.getElementById('board');
const showBoard = document.getElementById('showBoard');

const boardSize = document.getElementById('input');

const standard = document.getElementById('standard');
const bigBoggle = document.getElementById('bigBoggle');
const superBoggle = document.getElementById('superBoggle');

const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

function boggleBoard(size) {
    boardSetup.textContent = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            //board.textContent += '[--]'
            createLetterButtons();
        }
        // board.textContent += '\n'
        board.appendChild(document.createElement('br'));
    }
    submit.hidden = false;
}