import { convert } from './RomanNumerals';

describe('ローマ数字のカタ', () => {
  test('convertメソッドは数値をローマ数字に対応した文字列表現に変換する', () => {
    expect(convert(0)).toBe('');
    expect(convert(1)).toBe('I');
    expect(convert(2)).toBe('II');
    expect(convert(3)).toBe('III');
    expect(convert(4)).toBe('IV');
    expect(convert(5)).toBe('V');
    expect(convert(6)).toBe('VI');
    expect(convert(7)).toBe('VII');
    expect(convert(8)).toBe('VIII');
    expect(convert(9)).toBe('IX');
    expect(convert(10)).toBe('X');
    expect(convert(11)).toBe('XI');
    expect(convert(12)).toBe('XII');
    expect(convert(14)).toBe('XIV');
    expect(convert(15)).toBe('XV');
    expect(convert(18)).toBe('XVIII');
    expect(convert(19)).toBe('XIX');
    expect(convert(20)).toBe('XX');
    expect(convert(21)).toBe('XXI');
    expect(convert(40)).toBe('XL');
    expect(convert(41)).toBe('XLI');
    expect(convert(49)).toBe('XLIX');
    expect(convert(50)).toBe('L');
    expect(convert(80)).toBe('LXXX');
    expect(convert(90)).toBe('XC');
    expect(convert(100)).toBe('C');
    expect(convert(200)).toBe('CC');
    expect(convert(400)).toBe('CD');
    expect(convert(500)).toBe('D');
    expect(convert(900)).toBe('CM');
    expect(convert(1000)).toBe('M');
    expect(convert(1999)).toBe('MCMXCIX');
  });
});
