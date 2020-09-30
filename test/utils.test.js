// IMPORT MODULES under test here:
import { flipCoin, doesUserWin } from '../utils.js';

const test = QUnit.test;

test('should randomly return heads or tails', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = flipCoin();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});


test('should return false if the user guesses wrong', (expect) => {
    const guess = 'heads';
    const thrownValue = 'tails';
    const expected = false;

    const actual = doesUserWin(guess, thrownValue);

    expect.equal(actual, expected);
});

test('should return true if the user guesses right', (expect) => {
    const guess = 'tails';
    const thrownValue = 'tails';
    const expected = true;

    const actual = doesUserWin(guess, thrownValue);

    expect.equal(actual, expected);
});
