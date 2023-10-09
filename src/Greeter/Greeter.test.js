import Greeter from './Greeter';

describe('挨拶をする Greeter クラス', () => {
  describe('greet メソッドは引数の名前に対して、文字列で挨拶を返す', () => {
    test('文字列 "Hello <名前>" を返す', () => {
      const sut = new Greeter();

      const result = sut.greet('John');

      expect(result).toBe('Hello John');
    });
    test('名前をトリムする', () => {
      const sut = new Greeter();

      const result = sut.greet('  John  ');

      expect(result).toBe('Hello John');
    });
    test('名前の最初の文字を大文字にする', () => {
      const sut = new Greeter();

      const result = sut.greet('john');

      expect(result).toBe('Hello John');
    });
  })
});
