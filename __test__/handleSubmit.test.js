import { apiRun } from '../src/client/js/formHandler'
global.fetch = require('node-fetch')

// Localhost 8081 needs to be running for the test to pass
test('WORK API', async () => {
    const input = 'www.example.com';
    return apiRun(input).then(apiData => {
        expect(apiData.agreement).toBe('AGREEMENT');
    });
});