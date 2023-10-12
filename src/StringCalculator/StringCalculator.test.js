import StringCalculator from './StringCalculator';

describe('文字列についての計算を行う StringCalculator クラス', () => {
  describe('add メソッドは与えられた文字列内の数値の和を返す', () => {
    let sut;
    beforeEach(() => {
      sut = new StringCalculator();
    });

    test('空の文字列は 0 を返す', () => {
      expect(sut.add('')).toBe(0);
    });

    test.each([
      ['1', 1],
      ['2', 2],
    ])('単一の数字からなる文字列はそのまま数値に変換して返す ("%s" => %i)', (input, expected) => {
      expect(sut.add(input)).toBe(expected);
    });

    test.each([
      ['1,2', 3],
      ['3,4', 7],
    ])('カンマで区切られた数字は、その合計を数値で返す ("%s" => %i)', (input, expected) => {
      expect(sut.add(input)).toBe(expected);
    });

    test.each([
      ['1\n2', 3],
      ['3\n4', 7],
    ])('改行で区切られた数字は、その合計を数値で返す ("%s" => %i)', (input, expected) => {
      expect(sut.add(input)).toBe(expected);
    });

    test('区切文字がカンマと改行の両方含まれていても、その合計を数値で返す', () => {
      expect(sut.add('1\n2,3\n4')).toBe(10);
    });

    test('負の数が含まれる場合は例外をスローする', () => {
      expect(() => sut.add('-1,2,-3')).toThrow('negatives not allowed: -1,-3');
    });

    test('1000以上の数は無視される', () => {
      expect(sut.add('1,1000,2')).toBe(3);
    });

    test.each([
      ['//#\n1#2', 3],
      ['//-\n3-4', 7],
    ])('//で始まる１行目がある場合、//の後に続く単一の文字を区切りとして、２行目の数字の合計を返す ("%s" => %i)', (input, expected) => {
      expect(sut.add(input)).toBe(expected);
    });

    test.each([
      ['//###\n1###2', 3],
      ['//-=a1\n3-=a14', 7],
    ])('//で始まる１行目がある場合、//の後に続く文字列を区切りとして、２行目の数字の合計を返す ("%s" => %i)', (input, expected) => {
      expect(sut.add(input)).toBe(expected);
    });
  });
});
