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
    test('負の数が含まれる場合は例外をスローする', () => {
      const sut = new StringCalculator();

      expect(() => sut.add('-1,2,-3')).toThrow('negatives not allowed: -1,-3');
    });
    test('1000以上の数は無視される', () => {
      const sut = new StringCalculator();

      const result = sut.add('1,1000,2');

      expect(result).toBe(3);
    });
    test('//で始まる１行目がある場合、//の後に続く単一の文字を区切りとして、２行目の数字の合計を返す', () => {
      const sut = new StringCalculator();

      const result = sut.add('//#\n1#2');

      expect(result).toBe(3);
    });
  });
});
