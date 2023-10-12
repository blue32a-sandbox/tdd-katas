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
    test('カンマで区切られた数字は、その合計を数値で返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('1,2');

      expect(result).toBe(3);
    });
    test('改行で区切られた数字は、その合計を数値で返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('1\n2');

      expect(result).toBe(3);
    });
    test('区切文字がカンマと改行の両方含まれていても、その合計を数値で返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('1\n2,3\n4');

      expect(result).toBe(10);
    });
  });
});
