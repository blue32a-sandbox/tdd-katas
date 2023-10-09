import Greeter from './Greeter';

describe('挨拶をする Greeter クラス', () => {
  test('greet メソッドは名前を文字列で受け取り、文字列 "Hello <名前>" にして返す', () => {
    const sut = new Greeter();

    const result = sut.greet('John');

    expect(result).toBe('Hello John');
  });
});
