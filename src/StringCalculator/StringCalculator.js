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
  _parse(input) {
    let delimiter = /[,\n]/;
    let data = input;
    const lines = input.split('\n');

    if (lines[0].startsWith('//')) {
      delimiter = lines[0].slice(2);
      data = lines[1];
    }

    return data.split(delimiter)
              .map((v) => parseInt(v))
              .filter((v) => v < 1000);
  }
}
