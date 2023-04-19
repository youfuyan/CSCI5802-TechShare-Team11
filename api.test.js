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
