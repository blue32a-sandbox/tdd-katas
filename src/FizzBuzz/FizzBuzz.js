export function fizzBuzz() {
  const numbers = [...Array(100)].map((_, i) => i + 1);

  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0)                  return "Fizz";
    if (num % 5 === 0)                  return "Buzz";
    return num;
  });
}
