export function generate(int) {
  const primes = [];
  let candidate = 2;
  while (int > 1) {
    while (int % candidate === 0) {
      primes.push(candidate);
      int /= candidate;
    }
    candidate++;
  }
  if (int > 1) {
    primes.push(int);
  }
  return primes;
}
