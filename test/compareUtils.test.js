// import { example } from '../example.js';
import {
    checkGuess,
    // evalResult
} from '../compareUtils.js';

const test = QUnit.test;

// tests for checkGuess
test('It will return 0 if given 1 and 1', (expect) => {
    const expected = 0;
    
    const actual = checkGuess(1, 1);

    expect.equal(actual, expected);
});

test('It will return -1 if given 1 and 18', (expect) => {
    const expected = -1;
    
    const actual = checkGuess(1, 18);

    expect.equal(actual, expected);
});

test('It will return 1 if given 20 and 3', (expect) => {
    const expected = 1;
    
    const actual = checkGuess(20, 3);

    expect.equal(actual, expected);
});

// temporary tests for evalResult
/* test('It will return "tooLow" if given -1', (expect) => {
    const expected = 'tooLow';
    
    const actual = evalResult(-1);

    expect.equal(actual, expected);
});

test('It will return "tooHigh" if given 1', (expect) => {
    const expected = 'tooHigh';
    
    const actual = evalResult(1);

    expect.equal(actual, expected);
});

test('It will return "justRight" if given 0', (expect) => {
    const expected = 'justRight';
    
    const actual = evalResult(0);

    expect.equal(actual, expected);
});

test('It will return "error!" if given 3', (expect) => {
    const expected = 'error!';
    
    const actual = evalResult(3);

    expect.equal(actual, expected);
}); */

