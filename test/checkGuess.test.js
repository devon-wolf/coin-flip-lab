// import { example } from '../example.js';
import { checkGuess } from '../compareUtils.js';

const test = QUnit.test;

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