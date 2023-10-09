import capitalize from 'lodash/capitalize';

export default class Greeter {
  constructor(date) {
    this._date = date;
  }
  greet(name) {
    const filteredName = capitalize(name.trim());
    if (this.morning) return `Good morning ${filteredName}`;
    if (this.evening) return `Good evening ${filteredName}`;
    if (this.night) return `Good night ${filteredName}`;
    return `Hello ${filteredName}`;
  }
  get morning() {
    return this._date.getHours() >= 6 && this._date.getHours() < 12;
  }
  get evening() {
    return this._date.getHours() >= 18 && this._date.getHours() < 22;
  }
  get night() {
    return this._date.getHours() >= 22
          || (this._date.getHours() >= 0 && this._date.getHours() < 6);
  }
}
