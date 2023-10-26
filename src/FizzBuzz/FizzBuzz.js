const converter = (rules) => (start = 1, end = 100) => {
  const numbers = intRange(start, end);

  return numbers.map((num) => {
    return rules.reduce((carry, rule) => rule(num, carry), '');
  });
};

function intRange(start, end) {
  return [...Array(end - start + 1)].map((_, i) => i + start);
}

const conditionsRuleBase  = (conditions, replace) =>
  (num, carry) => conditions(num) ? carry + replace : carry;

const multiplesRuleBase   = (multiples, replace) =>
  conditionsRuleBase((num) => num % multiples === 0, replace);

const lessThanRuleBase    = (lessThan, replace) =>
  conditionsRuleBase((num) => num < lessThan,        replace);

const greaterThanRuleBase = (greaterThan, replace) =>
  conditionsRuleBase((num) => num > greaterThan,     replace);

const passThroughRule =
  (num, carry) => carry === '' ? num : carry;

export const fizzBuzz = converter([
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  passThroughRule,
]);

export const fizzBuzzFooBoo = converter([
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  multiplesRuleBase(7, 'Foo'),
  multiplesRuleBase(11, 'Boo'),
  passThroughRule,
]);

export const smallBigFizzBuzz = converter([
  lessThanRuleBase(16, 'Small'),
  greaterThanRuleBase(95, 'Big'),
  multiplesRuleBase(3, 'Fizz'),
  multiplesRuleBase(5, 'Buzz'),
  passThroughRule,
]);

export const buzzFizz = converter([
  multiplesRuleBase(3, 'Buzz'),
  multiplesRuleBase(5, 'Fizz'),
  passThroughRule,
]);

export const ftw = converter([
  conditionsRuleBase((num) => num % 3 === 0 && num % 5 === 0, 'FTW'),
  passThroughRule,
]);

export const gg = converter([
  conditionsRuleBase((num) => num % 3 === 0 || num % 5 === 0, 'GG'),
  passThroughRule,
]);
