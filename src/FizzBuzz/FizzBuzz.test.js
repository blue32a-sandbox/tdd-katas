import { fizzBuzz, fizzBuzzFooBoo } from './FizzBuzz';
import { fixtures } from './fixtures';

describe('FizzBuzz', () => {
  test('1から100までのFizzBuzz配列を返す', () => {
    expect(fizzBuzz()).toEqual(fixtures.fizzBuzz);
  });

  describe('Step 1. 数字の範囲を変更する', () => {
    test('1から20までのFizzBuzz配列を返す', () => {
      expect(fizzBuzz(1, 20)).toEqual(fixtures.fizzBuzzFrom1to20);
    });
    test('15から50までのFizzBuzz配列を返す', () => {
      expect(fizzBuzz(15, 50)).toEqual(fixtures.fizzBuzzFrom15to50);
    });
  });

  describe('Step 2. 倍数7と11の追加ルール', () => {
    test('7の倍数はFooに、11の倍数はBooに変換する', () => {
      expect(fizzBuzzFooBoo()).toEqual(fixtures.fizzBuzzFooBoo);
    });
  });
});
