export function generate(int) {
  const primes = [];
  for (let candidate = 2; int > 1; candidate++) {
    for (; int % candidate === 0; int /= candidate) {
      primes.push(candidate);
    }
  }
  return primes;
}
