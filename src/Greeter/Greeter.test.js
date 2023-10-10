import { jest } from '@jest/globals';
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
      [22],
      [23],
      [0],
      [3],
      [5],
    ])('時刻が22:00-06:00の場合、文字列 "Good night <名前>" を返す (%i:00)', (hours) => {
      const sut = factoryGreeter(factoryDate(hours));

      const result = sut.greet('John');

      expect(result).toBe('Good night John');
    });
    test.each([
      [12],
      [15],
      [17],
    ])('それ以外の時刻の場合、文字列 "Hello <名前>" を返す (%i:00)', (hours) => {
      const sut = factoryGreeter(factoryDate(hours));

      const result = sut.greet('John');

      expect(result).toBe('Hello John');
    });
    test('名前をトリムする', () => {
      const sut = factoryGreeter(factoryDate(12));

      const result = sut.greet('  John  ');

      expect(result).toBe('Hello John');
    });
    test('名前の最初の文字を大文字にする', () => {
      const sut = factoryGreeter(factoryDate(12));

      const result = sut.greet('john');

      expect(result).toContain('Hello John');
    });
    test('呼び出すとコンソールにログを記録する', () => {
      const logMock = jest.fn();
      const sut = factoryGreeter(factoryDate(12), {log: logMock});

      sut.greet('John');

      expect(logMock).toHaveBeenCalledWith('greeted John');
    });
  })
});

function factoryGreeter(date, logger) {
  date = typeof date === "undefined" ? new Date() : date;
  logger = typeof logger === "undefined" ? {log: jest.fn()} : logger;
  return new Greeter(date, logger);
}

function factoryDate(hours) {
  const result = new Date();
  result.setHours(hours);
  return result
}
