// import functions and grab DOM elements
const button = document.querySelector('#call-it');
const winsSpan = document.querySelector('#wins');
const percentSpan = document.querySelector('#percent');
const resultSpan = document.querySelector('#result');

// initialize state
let wins = 0;
let total = 0;


// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // - 'flip the coin' and find out what side it landed on
    const randomNumber = Math.ceil(Math.random() * 2);

    // i need to compare this random number to 'heads' or 'tails'

    // we're comparing apples and oranges: two types. We need to convert the string to a number, or vice versa.

    let itLandedOn;
    // if randomNumber is 1, lets call it heads
    // if it's 2, lets call it tails

    if (randomNumber === 1) {
        itLandedOn = 'heads';
    } else {
        itLandedOn = 'tails';
    }

    // - get the user's guess
    // okay, which one is checked . . .
    const checkedRadioButton = document.querySelector(':checked');
    const userGuess = checkedRadioButton.value;

    // - we determine if the user was right
    if (userGuess === itLandedOn) {
        //     - if they were right, increment the wins AND increment total
        wins++;
        total++;

        winsSpan.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
        resultSpan.textContent = 'You guessed right!';
    } else {
        //     - if they were wrong, increment just the total 
        total++;

        resultSpan.textContent = 'You guessed wrong!';
        percentSpan.textContent = `${(wins / total) * 100}%`;
    }
});