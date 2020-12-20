import { apiRun } from '../src/client/js/formHandler'
global.fetch = require('node-fetch')

test('WORK API', async () => {
    const input = 'www.example.com';
    return apiRun(input).then(apiData => {
        expect(apiData.agreement).toBe('AGREEMENT');
    });
});