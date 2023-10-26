const converter = (rules) => (start = 1, end = 100) => {
  const numbers = intRange(start, end);

  return numbers.map((num) => {
    return rules.reduce((carry, roule) => roule(num, carry), '');
  });
};

function intRange(start, end) {
  return [...Array(end - start + 1)].map((_, i) => i + start);
}

const multiplesRuleBase   = (multiples, replace) =>
  (num, carry) => num % multiples === 0 ? carry + replace : carry;

const lessThanRuleBase    = (lessThan, replace) =>
  (num, carry) => num < lessThan        ? carry + replace : carry;

const greaterThanRuleBase = (greaterThan, replace) =>
  (num, carry) => num > greaterThan     ? carry + replace : carry;

const passThroughRoule =
  (num, carry) => carry === '' ? num : carry;

export const fizzBuzz = converter([
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  passThroughRoule,
]);

export const fizzBuzzFooBoo = converter([
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  multiplesRuleBase(7, 'Foo'),
  multiplesRuleBase(11, 'Boo'),
  passThroughRoule,
]);

export const smallBigFizzBuzz = converter([
  lessThanRuleBase(16, 'Small'),
  greaterThanRuleBase(95, 'Big'),
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  passThroughRoule,
]);

export const buzzFizz = converter([
  multiplesRuleBase(3, 'Buzz'),
  multiplesRuleBase(5, 'Fizz'),
  passThroughRoule,
]);
