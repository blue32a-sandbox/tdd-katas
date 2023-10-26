import { fizzBuzz } from './FizzBuzz';
import { fixtures } from './fixtures';

describe('FizzBuzz', () => {
  test('1から100までのFizzBuzz配列を返す', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzz);
  });
});
