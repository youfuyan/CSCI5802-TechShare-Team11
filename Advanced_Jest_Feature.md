# Advanced Jest Feature Overview

## Mocking Functions:

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with `new`, and allowing test-time configuration of return values.

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a `manual mock` to override a module dependency.

### Using mock functions:

Let's imagine we're testing an implementation of a function `fetchData`, which is supposed to return a string from an API. We don't want to actually call the API, so we'll use a mock function to return a string instead.

```js
// api.js
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { fetchData };
```

In this example, the fetchData function uses Axios to send a GET request to the https://api.example.com/data endpoint and returns the response data. If an error occurs, it logs the error and returns `null`.

```js
// api.test.js
const { fetchData } = require('./api');
const axios = require('axios');

// Create a mock function for Axios
jest.mock('axios');

describe('fetchData', () => {
  it('should return the data from the API', async () => {
    // Configure the Axios mock function to return a specific value
    axios.get.mockResolvedValue({ data: 'Hello, World!' });

    // Call the fetchData function
    const result = await fetchData();

    // Assert that the fetchData function returns the correct data
    expect(result).toEqual('Hello, World!');

    // Assert that the Axios mock function was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data');
  });
});
```

In this test, we use jest.mock('axios') to create a mock function for Axios. We then configure the Axios mock function to resolve with a specific value ({ data: 'Hello, World!' }) using axios.get.mockResolvedValue. This means that when the fetchData function sends a GET request using Axios, the mock function will be called instead of the actual Axios function.

We then call the fetchData function and use Jest's expect function to assert that the result is equal to 'Hello, World!' and that the Axios mock function was called with the correct URL.

By using a mock function, we are able to simulate the behavior of the Axios library without actually making network requests, making our test more reliable and efficient.

## Asynchronous Testing:

Jest provides simple and efficient ways to test asynchronous code. You can use the async/await syntax to handle Promises or the done callback to test callbacks. Jest ensures that asynchronous tests complete before moving on to the next test, so you can trust the accuracy of your test results.

## Snapshot Testing:

Snapshot testing in Jest allows you to automatically capture and save the output of a component or function as a snapshot. Jest then compares future test outputs to this saved snapshot to detect any changes. Snapshot testing is great for verifying the behavior of UI components and ensuring that changes are intentional. It helps catch unintended modifications and improves code quality.
