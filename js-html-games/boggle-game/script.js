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

const dice = [  
    ['A', 'E', 'A', 'N', 'E', 'G'], // dice 1
    ['A', 'H', 'S', 'P', 'C', 'O'], // dice 2
    ['A', 'S', 'P', 'F', 'F', 'K'], // dice 3
    ['O', 'B' ,'J', 'O', 'A', 'B'], // dice 4
    ['I', 'O', 'T', 'M', 'U', 'C'], // 5
    ['R', 'Y', 'V', 'D', 'E', 'L'], // 6
    ['L', 'R', 'E', 'I', 'X', 'D'], // 7
    ['E', 'I', 'U', 'N', 'E', 'S'], // 8
    ['W', 'N', 'G', 'E', 'E', 'H'], // 9
    ['L', 'N', 'H', 'N', 'R', 'Z'], // 10
    ['T', 'S', 'T', 'I', 'Y', 'D'], // 11
    ['O', 'W', 'T', 'O', 'A', 'T'], // 12
    ['E', 'R', 'T', 'T', 'Y', 'L'], // 13
    ['T', 'O', 'E', 'S', 'S', 'I'], // 14
    ['T', 'E', 'R', 'W', 'H', 'V'], // 15
    ['N', 'U', 'I', 'H', 'M', 'Qu'], //16
]

const diceSet = [];

function rollDice(diceArr) {
    const omgRoll = diceArr[Math.floor(Math.random() * diceArr.length)];
    diceSet.push(omgRoll);
}

//const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let count = 0;

function createLetterButtons() {
    for (const d of dice) {
        rollDice(d);
    }

    const letter = diceSet[count];
    const letterButton = document.createElement('button');
    // const buttonChar = document.createTextNode('[--]');
    
    letterButton.style.width = '50px';
    letterButton.style.height = '50px';
    letterButton.style.fontWeight = 'bold';
    letterButton.id = letter;

    letterButton.appendChild(document.createTextNode(letter)); //buttonChar

    letterButton.addEventListener('click', function() {
        letterButton.classList.toggle('selected');

        if (letterButton.classList.contains('selected')) {
            console.log(`${letter} selected`);
            letterButton.style.color = 'orange'
            letterButton.style.fontWeight = 'bold'
            letterButton.style.backgroundColor = 'darkslategrey'
            
        } else {
            console.log(`${letter} unselected`);
            letterButton.style.color = 'black'
            letterButton.style.backgroundColor = '';
        }

    });

    board.appendChild(letterButton);
    
    count++;

    if (count === 16) {
        count = 0;
    }
}

function hideButtons() {
    standard.hidden = true;
    bigBoggle.hidden = true;
    superBoggle.hidden = true;
}

standard.addEventListener('click', function() {
    hideButtons()
});

bigBoggle.addEventListener('click', function() {
    hideButtons();
});

superBoggle.addEventListener('click', function() {
    hideButtons();
});

submit.addEventListener('click', function() {
    const selectedLetter = document.querySelectorAll('button.selected');
    
    selectedLetter.forEach(b => {
        b.style.color = 'Black'
        b.style.backgroundColor = '';
    })
    
    

    /// not i
    selectedLetter.forEach(letterB => {
        console.log(letterB.textContent)
    })
});

reset.addEventListener('click', function () {
    board.textContent = '';
    count = 0;

    standard.hidden = false;
    bigBoggle.hidden = false;
    superBoggle.hidden = false;
});