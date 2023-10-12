import StringCalculator from './StringCalculator';

describe('文字列についての計算を行う StringCalculator クラス', () => {
  describe('add メソッドは与えられた文字列内の数値の和を返す', () => {
    test('空の文字列は 0 を返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('');

      expect(result).toBe(0);
    });
    test('単一の数字からなる文字列はそのまま数値に変換して返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('2');

      expect(result).toBe(2);
    });
  });
});
