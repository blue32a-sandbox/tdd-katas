const live = 1;
const dead = 0;

export class GameOfLife {
  nextGeneration(grid) {
    this._grid = grid;
    const result = this._grid.map((row, rowIndex) => row.map((_, columnIndex) => {
      return this._convertNextGeneration(rowIndex, columnIndex);
    }));
    return result;
  }
  _convertNextGeneration(cellRowIndex, cellColumnIndex) {
    const cell = this._grid[cellRowIndex][cellColumnIndex];
    const countLivingNeighbors = this._countLivingNeighbors(cellRowIndex, cellColumnIndex);

    if (cell === live) {
      if (countLivingNeighbors <= 1) return dead;
      if (countLivingNeighbors >= 4) return dead;
    } else {
      if (countLivingNeighbors === 3) return live;
    }
    return cell;
  }
  _countLivingNeighbors(rowIndex, columnIndex) {
    const neighbors = [
      this._grid[rowIndex - 1]?.[columnIndex - 1],
      this._grid[rowIndex - 1]?.[columnIndex],
      this._grid[rowIndex - 1]?.[columnIndex + 1],
      this._grid[rowIndex]?.[columnIndex - 1],
      this._grid[rowIndex]?.[columnIndex + 1],
      this._grid[rowIndex + 1]?.[columnIndex - 1],
      this._grid[rowIndex + 1]?.[columnIndex],
      this._grid[rowIndex + 1]?.[columnIndex + 1],
    ].filter(neighbor => neighbor !== undefined);
    return neighbors.filter(neighbor => neighbor === live).length;
  }
}
