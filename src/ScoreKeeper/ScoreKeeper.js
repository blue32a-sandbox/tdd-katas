export default class ScoreKeeper {
  constructor() {
    this.teamAScore = 0;
    this.teamBScore = 0;
  }
  _zeroPadding(num) {
    return num.toString().padStart(3, '0');
  }
  getScore() {
    return this._zeroPadding(this.teamAScore)
         + ':'
         + this._zeroPadding(this.teamBScore);
  }
  _scoreTeamA(score) {
    this.teamAScore += score;
  }
  scoreTeamA1() {
    this._scoreTeamA(1);
  }
  scoreTeamA2() {
    this._scoreTeamA(2);
  }
  scoreTeamA3() {
    this._scoreTeamA(3);
  }
  _scoreTeamB(score) {
    this.teamBScore += score;
  }
  scoreTeamB1() {
    this._scoreTeamB(1);
  }
  scoreTeamB2() {
    this._scoreTeamB(2);
  }
  scoreTeamB3() {
    this._scoreTeamB(3);
  }
}
