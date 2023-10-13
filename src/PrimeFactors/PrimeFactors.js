export function generate(int) {
  const primes = [];
  if (int > 1) {
    if (int % 2 === 0) {
      primes.push(2);
      int /= 2;
    }
    if (int > 1) {
      primes.push(int);
    }
  }
  return primes;
}
