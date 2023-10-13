import { generate } from './PrimeFactors';

describe('素因数分解について扱う PrimeFactors モジュール', () => {
  describe('generate 関数は与えられた整数の素因数含むリストを返す', () => {
    test('整数 1 のとき、 [] を返す', () => {
      expect(generate(1)).toEqual([]);
    });
    test('整数 2 のとき、 [2] を返す', () => {
      expect(generate(2)).toEqual([2]);
    });
    test('整数 3 のとき、 [3] を返す', () => {
      expect(generate(3)).toEqual([3]);
    });
    test('整数 4 のとき、 [2,2] を返す', () => {
      expect(generate(4)).toEqual([2, 2]);
    });
    test('整数 5 のとき、 [5] を返す', () => {
      expect(generate(5)).toEqual([5]);
    });
    test('整数 6 のとき、 [2,3] を返す', () => {
      expect(generate(6)).toEqual([2, 3]);
    });
    test('整数 7 のとき、 [7] を返す', () => {
      expect(generate(7)).toEqual([7]);
    });
  });
});
