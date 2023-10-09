import Greeter from './Greeter';

describe('挨拶をする Greeter クラス', () => {
  describe('greet メソッドは引数の名前に対して、文字列で挨拶を返す', () => {
    test.each([
      [6],
      [9],
      [11],
    ])('時刻が06:00-12:00の場合、文字列 "Good morning <名前>" を返す (%i:00)', (hours) => {
      const sut = factoryGreeter(factoryDate(hours));

      const result = sut.greet('John');

      expect(result).toBe('Good morning John');
    });
    test.each([
      [18],
      [20],
      [21],
    ])('時刻が18:00-22:00の場合、文字列 "Good evening <名前>" を返す (%i:00)', (hours) => {
      const sut = factoryGreeter(factoryDate(hours));

      const result = sut.greet('John');

      expect(result).toBe('Good evening John');
    });
    test.each([
      [0],
      [3],
      [5],
      [12],
      [17],
      [22],
      [23],
    ])('それ以外の時刻の場合、文字列 "Hello <名前>" を返す (%i:00)', (hours) => {
      const sut = factoryGreeter(factoryDate(hours));

      const result = sut.greet('John');

      expect(result).toBe('Hello John');
    });
    test('名前をトリムする', () => {
      const sut = factoryGreeter();

      const result = sut.greet('  John  ');

      expect(result).toBe('Hello John');
    });
    test('名前の最初の文字を大文字にする', () => {
      const sut = factoryGreeter();

      const result = sut.greet('john');

      expect(result).toBe('Hello John');
    });
  })
});

function factoryGreeter(date) {
  date = typeof date === "undefined" ? new Date() : date;
  return new Greeter(date);
}

function factoryDate(hours) {
  const result = new Date();
  result.setHours(hours);
  return result
}
