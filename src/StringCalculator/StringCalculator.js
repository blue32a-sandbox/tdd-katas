import split from 'lodash/split';

export default class StringCalculator {
  add(str) {
    if (str === '') return 0;
    return split(str, /[,\n]/)
              .map((v) => parseInt(v))
              .reduce((previous, current) => previous + current, 0);
  }
}
