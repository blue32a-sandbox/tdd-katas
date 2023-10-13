import { generate } from './PrimeFactors';

describe('素因数分解について扱う PrimeFactors モジュール', () => {
  describe('generate 関数は与えられた整数の素因数含むリストを返す', () => {
    test('整数 1 のとき、 [] を返す', () => {
      expect(generate(1)).toEqual([]);
    });
  });
});
