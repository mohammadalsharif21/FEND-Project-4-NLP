import { checkURL } from '../src/client/js/nameChecker'

test('check URL function', ()=> {
    expect(checkURL('www.example.com')).toBe(true);
});