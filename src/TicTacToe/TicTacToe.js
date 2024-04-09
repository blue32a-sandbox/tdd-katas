export default class TicTacToe {
  constructor() {
    this._initializeFields(3);
    this.players = ['X', 'O'];
    this.currentPlayer = 0;
    this.isOver = false;
  }
  _initializeFields(length) {
    this.fields = new Array(length)
      .fill()
      .map(() => new Array(length).fill(undefined));
  }
  take(x, y) {
    if (this.fields[x][y]) {
      throw new Error('既に取られたフィールドです');
    }
    this.fields[x][y] = this.players[this.currentPlayer];
    this.isOver = this._isGameOver();
    this._changePlayer();
  }
  _isGameOver() {
    const player = this.players[this.currentPlayer];
    if (this._isTakenAllFiledInRow(player)) {
      return true;
    }
    if (this._isTakenAllFiledInColumn(player)) {
      return true;
    }
    if (this._isTakenAllFiledInDiagonal(player)) {
      return true;
    }
    if (this._isTakenAllFiled()) {
      return true;
    }
    return false;
  }
  _isTakenAllFiledInRow(player) {
    return this.fields
      .some(row => row.every(field => field === player));
  }
  _isTakenAllFiledInColumn(player) {
    for (let columnIndex = 0; columnIndex < this.fields.length; columnIndex++) {
      if (this.fields.every(row => row[columnIndex] === player)) {
        return true;
      }
    }
  }
  _isTakenAllFiledInDiagonal(player) {
    if (this.fields.every((row, index) => row[index] === player)) {
      return true;
    }
    if (this.fields.every((row, index) => row[row.length - index - 1] === player)) {
      return true;
    }
  }
  _isTakenAllFiled() {
    return this.fields.every(row => row.every(field => field));
  }
  _changePlayer() {
    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
  }
}
