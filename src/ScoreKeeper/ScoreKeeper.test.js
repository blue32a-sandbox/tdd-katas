import ScoreKeeper from './ScoreKeeper';

describe('バスケットボール チームのスコアボードに適切なデータを配信する ScoreKeeper クラス', () => {
  test('スコアを保持し、取得する', () => {
    const sut = new ScoreKeeper();
    expect(sut.getScore()).toBe('000:000');

    sut.scoreTeamA1();
    expect(sut.getScore()).toBe('001:000');

    sut.scoreTeamA2();
    expect(sut.getScore()).toBe('003:000');

    sut.scoreTeamA3();
    expect(sut.getScore()).toBe('006:000');

    sut.scoreTeamA3();
    sut.scoreTeamA3();
    expect(sut.getScore()).toBe('012:000');

    sut.scoreTeamB1();
    expect(sut.getScore()).toBe('012:001');

    sut.scoreTeamB2();
    expect(sut.getScore()).toBe('012:003');

    sut.scoreTeamB3();
    expect(sut.getScore()).toBe('012:006');

    sut.scoreTeamB2();
    sut.scoreTeamB3();
    expect(sut.getScore()).toBe('012:011');
  });
});
