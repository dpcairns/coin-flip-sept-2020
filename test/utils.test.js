// IMPORT MODULES under test here:
import { flipCoin, doesUserWin } from '../utils.js';

const test = QUnit.test;

test('should randomly return heads or tails', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = flipCoin();
    const actual2 = flipCoin();
    const actual3 = flipCoin();
    const actual4 = flipCoin();
    const actual5 = flipCoin();

    const possibleValues = ['heads', 'tails'];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(possibleValues.includes(actual), true);
    expect.equal(possibleValues.includes(actual2), true);
    expect.equal(possibleValues.includes(actual3), true);
    expect.equal(possibleValues.includes(actual4), true);
    expect.equal(possibleValues.includes(actual5), true);
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
