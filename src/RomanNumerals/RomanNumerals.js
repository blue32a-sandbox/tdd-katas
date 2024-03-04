export function convert(int) {
  let result = '';

  const thousands = Math.floor(int / 1000);
  if (thousands === 1) result += 'M';

  const hundreds = Math.floor((int % 1000) / 100);
  result += hundredsConverter(hundreds);

  const tens = Math.floor((int % 100) / 10);
  result += tensConverter(tens);

  const once = int % 10;
  result += onceConverter(once);

  return result;
}

function converter(lower, middle, upper) {
  return function (int) {
    if (int <= 3)  return lower.repeat(int);
    if (int === 4) return lower + middle;
    if (int <= 8)  return middle + lower.repeat(int - 5);
    if (int === 9) return lower + upper;
    return '';
  }
}

const onceConverter     = converter('I', 'V', 'X');
const tensConverter     = converter('X', 'L', 'C');
const hundredsConverter = converter('C', 'D', 'M');
