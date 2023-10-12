export default class StringCalculator {
  add(str) {
    if (str === '') return 0;

    const nums = this._parse(str);
    this._assertNoNegative(nums);

    return this._sum(nums);
  }
  _parse(input) {
    let delimiter = /[,\n]/;
    let dataStr = input;
    const lines = input.split('\n');

    if (lines[0].startsWith('//')) {
      delimiter = lines[0].slice(2);
      dataStr = lines[1];
    }

    return dataStr.split(delimiter)
              .map((s) => parseInt(s))
              .filter((i) => i < 1000);
  }
  _assertNoNegative(nums) {
    const negatives = nums.filter((i) => i < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives}`);
    }
  }
  _sum(nums) {
    return nums.reduce((previous, current) => previous + current, 0);
  }
}
