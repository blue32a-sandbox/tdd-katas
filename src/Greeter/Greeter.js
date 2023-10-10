import capitalize from 'lodash/capitalize';

export default class Greeter {
  constructor(date, logger) {
    this._date = date;
    this._logger = logger;
  }
  greet(name) {
    const filteredName = capitalize(name.trim());

    this._logger.log(`greeted ${filteredName}`);

    if (this.isMorning) return `Good morning ${filteredName}`;
    if (this.isEvening) return `Good evening ${filteredName}`;
    if (this.isNight) return `Good night ${filteredName}`;
    return `Hello ${filteredName}`;
  }
  get isMorning() {
    return this._date.getHours() >= 6 && this._date.getHours() < 12;
  }
  get isEvening() {
    return this._date.getHours() >= 18 && this._date.getHours() < 22;
  }
  get isNight() {
    return this._date.getHours() >= 22
          || (this._date.getHours() >= 0 && this._date.getHours() < 6);
  }
}
