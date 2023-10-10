import capitalize from 'lodash/capitalize';

export default class Greeter {
  constructor(date, logger) {
    this._date = date;
    this._logger = logger;
  }
  greet(name) {
    const filteredName = capitalize(name.trim());

    this._logger.log(`greeted ${filteredName}`);

    return `${this._greeting} ${filteredName}`;
  }
  get _greeting() {
    if (this._isMorning) return 'Good morning';
    if (this._isEvening) return 'Good evening';
    if (this._isNight) return 'Good night';
    return 'Hello';
  }
  get _isMorning() {
    return this._date.getHours() >= 6 && this._date.getHours() < 12;
  }
  get _isEvening() {
    return this._date.getHours() >= 18 && this._date.getHours() < 22;
  }
  get _isNight() {
    return this._date.getHours() >= 22
          || (this._date.getHours() >= 0 && this._date.getHours() < 6);
  }
}
