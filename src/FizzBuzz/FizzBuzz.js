export function fizzBuzz(start = 1, end = 100) {
  const numbers = [...Array(end - start + 1)].map((_, i) => i + start);

  return numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0)                  return "Fizz";
    if (num % 5 === 0)                  return "Buzz";
    return num;
  });
}
