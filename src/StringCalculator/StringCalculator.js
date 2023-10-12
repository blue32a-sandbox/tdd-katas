import split from 'lodash/split';

export default class StringCalculator {
  add(str) {
    if (str === '') return 0;

    const nums = this._parse(str);

    const negatives = nums.filter((v) => v < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((previous, current) => previous + current, 0);
  }
  _parse(str) {
    return split(str, /[,\n]/)
      .map((v) => parseInt(v))
      .filter((v) => v < 1000);
  }
}
