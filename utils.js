export function flipCoin() {
    const randomNumber = Math.ceil(Math.random() * 2);

    let itLandedOn;
    // if randomNumber is 1, lets call it heads
    // if it's 2, lets call it tails

    if (randomNumber === 1) {
        itLandedOn = 'heads';
    } else {
        itLandedOn = 'tails';
    }

    return itLandedOn;
}

export function doesUserWin(guess, value) {
    return guess === value;
}