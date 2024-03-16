function baseConvertRule(lower, middle, upper) {
  return function (int) {
    if (int <= 3)  return lower.repeat(int);
    if (int === 4) return lower + middle;
    if (int === 5) return middle;
    if (int <= 8)  return middle + lower.repeat(int - 5);
    if (int === 9) return lower + upper;
    return '';
  }
}
const convertOnce      = baseConvertRule('I', 'V', 'X');
const convertTens      = baseConvertRule('X', 'L', 'C');
const convertHundreds  = baseConvertRule('C', 'D', 'M');
const convertThousands = (thousands) => {
  if (thousands <= 3) return 'M'.repeat(thousands);
  return '';
};

function extractDigitValue(int, digit) {
  return Math.floor(int / digit) % 10;
}

export function convert(int) {
  const rules = [
    { digit: 1000, converter: convertThousands },
    { digit: 100, converter: convertHundreds },
    { digit: 10, converter: convertTens },
    { digit: 1, converter: convertOnce },
  ];
  return rules.reduce((result, { digit, converter }) => {
    return result + converter(extractDigitValue(int, digit));
  }, '');
}
