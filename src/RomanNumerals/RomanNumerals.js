function placeValueExtractor(place) {
  return function (int) {
    return Math.floor(int / place) % 10;
  }
}
const extractOnce      = placeValueExtractor(1);
const extractTens      = placeValueExtractor(10);
const extractHundreds  = placeValueExtractor(100);
const extractThousands = placeValueExtractor(1000);

function baseConverter(lower, middle, upper) {
  return function (int) {
    if (int <= 3)  return lower.repeat(int);
    if (int === 4) return lower + middle;
    if (int <= 8)  return middle + lower.repeat(int - 5);
    if (int === 9) return lower + upper;
    return '';
  }
}
const convertOnce      = baseConverter('I', 'V', 'X');
const convertTens      = baseConverter('X', 'L', 'C');
const convertHundreds  = baseConverter('C', 'D', 'M');
const convertThousands = (thousands) => (thousands === 1) ? 'M' : '';

export function convert(int) {
  const rules = [
    { extract: extractThousands, convert: convertThousands },
    { extract: extractHundreds, convert: convertHundreds },
    { extract: extractTens, convert: convertTens },
    { extract: extractOnce, convert: convertOnce }
  ];
  return rules.reduce((result, { extract, convert }) => {
    return result + convert(extract(int));
  }, '');
}
