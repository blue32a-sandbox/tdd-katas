import capitalize from 'lodash/capitalize';

export default class Greeter {
  greet(name) {
    const filteredName = capitalize(name.trim());
    return `Hello ${filteredName}`;
  }
}
