# Basic Jest Features

## Step 1

Initialize a new Node.js project with npm:

```bash
npm init -y

```

## Step 2

Install Jest as a development dependency:

```bash
npm install jest --save-dev

```

## Step 3

Create a file named `sum.js` with the following content:

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

## Step 4

Create a file named `sum.test.js` with the following content:

```js
const sum = require('./sum');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(5, 7)).not.toBe(12);
  });
});
```

## Step 5

In the package.json file, add a script to run the Jest test:

````json
    ```
    "scripts": {
      "test": "jest"
    },
    ```
````

## Step 6

Run the Jest test using the npm test script:

```bash
    npm test
```

Result:

```bash
$ npm test

> csci5802-techshare-team11@1.0.0 test
> jest

 PASS  ./sum.test.js
  sum
    ✓ should return the sum of two numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.146 s
Ran all test suites.
```

### Failed Test

If you add bug to the sum.js file, the test will fail:

```js
// sum.js
function sum(a, b) {
  // return a + b;
  // make a change to see if the test fails
  return a + b + 1;
}

module.exports = sum;
```

Then the result become:

```bash
$ npm test

> csci5802-techshare-team11@1.0.0 test
> jest

 FAIL  ./sum.test.js
  sum
    ✕ should return the sum of two numbers (1 ms)

  ● sum › should return the sum of two numbers

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 4

      4 | describe('sum', () => {
      5 |   it('should return the sum of two numbers', () => {
    > 6 |     expect(sum(1, 2)).toBe(3);
        |                       ^
      7 |     expect(sum(5, 7)).toBe(12);
      8 |   });
      9 | });

      at Object.toBe (sum.test.js:6:23)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.158 s, estimated 1 s
Ran all test suites.
```

Jest will run the test and display the results in the terminal. If the test passes, you'll see output indicating that the test passed successfully. If there's an issue with the code or the test, you'll see output describing the error. This example demonstrates a simple use case for Jest.

In the next section, we'll look at some more advanced features of Jest.
