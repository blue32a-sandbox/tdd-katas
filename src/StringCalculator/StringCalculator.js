export default class StringCalculator {
  add(str) {
    if (str === '') return 0;
    return str.split(',')
              .map((v) => parseInt(v))
              .reduce((previous, current) => previous + current, 0);
  }
}
