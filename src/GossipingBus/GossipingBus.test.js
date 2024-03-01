import { GossipingBus } from './GossipingBus';

describe('Gossiping Bus', () => {
  test('operate', () => {
    const sut = new GossipingBus();
    expect(sut.operate("1\n1")).toBe(1);
    expect(sut.operate("1\n2")).toBe(undefined);
    expect(sut.operate("1 3\n2 3")).toBe(2);
    expect(sut.operate("1 2\n1 3")).toBe(1);
    expect(sut.operate("2 1\n1")).toBe(2);
    expect(sut.operate("2 1\n1 3")).toBe(undefined);
    expect(sut.operate("1\n1\n1")).toBe(1);
    expect(sut.operate("1 4\n2 4\n3 4")).toBe(2);
    expect(sut.operate("1 2 4\n1 3 5\n2 3 4")).toBe(3);
    expect(sut.operate("3 1 2 3\n3 2 3 1\n4 2 3 4 5")).toBe(5);
    expect(sut.operate("7 11 2 2 4 8 2 2\n3 0 11 8\n5 11 8 10 3 11\n5 9 2 5 0 3\n7 4 8 2 8 1 0 5\n3 6 8 9\n4 2 11 3 3")).toBe(9);
  });
});
