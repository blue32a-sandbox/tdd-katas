import { ChristmasLights, Coordinate } from './ChristmasLights';

describe('ChristmasLights', () => {
  test('all start turned off', () => {
    const lights = factoryChristmasLights(1000, 1000);
    expect(lights.sumBrightness()).toBe(0);
  });

  describe('1 x 1', () => {
    let lights;

    beforeEach(() => {
      lights = factoryChristmasLights(1, 1);
    });

    test('turn on', () => {
      lights.turnOn(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("1");
      expect(lights.sumBrightness()).toBe(1);

      lights.turnOn(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("2");
      expect(lights.sumBrightness()).toBe(2);
    });
    test('turn off', () => {
      lights.turnOn(coord(0, 0), coord(0, 0));
      lights.turnOn(coord(0, 0), coord(0, 0));

      lights.turnOff(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("1");
      expect(lights.sumBrightness()).toBe(1);

      lights.turnOff(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("0");
      expect(lights.sumBrightness()).toBe(0);

      lights.turnOff(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("0");
      expect(lights.sumBrightness()).toBe(0);
    });
    test('toggle', () => {
      lights.toggle(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("2");
      expect(lights.sumBrightness()).toBe(2);

      lights.toggle(coord(0, 0), coord(0, 0));
      expect(lights.toString()).toBe("4");
      expect(lights.sumBrightness()).toBe(4);
    });
  });

  describe('2 x 1', () => {
    let lights;

    beforeEach(() => {
      lights = factoryChristmasLights(2, 1);
    });

    function turnOnAll() {
      lights.turnOn(coord(0, 0), coord(1, 0));
    }

    test('turn on (1,0)', () => {
      lights.turnOn(coord(1, 0), coord(1, 0));
      expect(lights.toString()).toBe("01");
      expect(lights.sumBrightness()).toBe(1);
    });
    test('turn on (0,0)~(1,0)', () => {
      lights.turnOn(coord(0, 0), coord(1, 0));
      expect(lights.toString()).toBe("11");
      expect(lights.sumBrightness()).toBe(2);
    });
    test('turn off (1,0)', () => {
      turnOnAll();
      lights.turnOff(coord(1, 0), coord(1, 0));
      expect(lights.toString()).toBe("10");
      expect(lights.sumBrightness()).toBe(1);
    });
    test('turn off (0,0)~(1,0)', () => {
      turnOnAll();
      lights.turnOff(coord(0, 0), coord(1, 0));
      expect(lights.toString()).toBe("00");
      expect(lights.sumBrightness()).toBe(0);
    });
    test('toggle (0,0)~(1,0)', () => {
      lights.turnOn(coord(1, 0), coord(1, 0));
      lights.toggle(coord(0, 0), coord(1, 0));
      expect(lights.toString()).toBe("23");
      expect(lights.sumBrightness()).toBe(5);
    });
  });

  describe('2 x 2', () => {
    let lights;

    beforeEach(() => {
      lights = factoryChristmasLights(2, 2);
    });

    function turnOnAll() {
      lights.turnOn(coord(0, 0), coord(1, 1));
    }

    test('turn on (0,1)', () => {
      lights.turnOn(coord(0, 1), coord(0, 1));
      expect(lights.toString()).toBe("00\n10");
      expect(lights.sumBrightness()).toBe(1);
    });
    test('turn on (1,1)', () => {
      lights.turnOn(coord(1, 1), coord(1, 1));
      expect(lights.toString()).toBe("00\n01");
      expect(lights.sumBrightness()).toBe(1);
    });
    test('turn on (0.0)~(1,1)', () => {
      lights.turnOn(coord(0, 0), coord(1, 1));
      expect(lights.toString()).toBe("11\n11");
      expect(lights.sumBrightness()).toBe(4);
    });

    test('turn off (0,1)', () => {
      turnOnAll();
      lights.turnOff(coord(0, 1), coord(0, 1));
      expect(lights.toString()).toBe("11\n01");
      expect(lights.sumBrightness()).toBe(3);
    });
    test('turn off (1,1)', () => {
      turnOnAll();
      lights.turnOff(coord(1, 1), coord(1, 1));
      expect(lights.toString()).toBe("11\n10");
      expect(lights.sumBrightness()).toBe(3);
    });
    test('turn off (0.0)~(1,1)', () => {
      turnOnAll();
      lights.turnOff(coord(0, 0), coord(1, 1));
      expect(lights.toString()).toBe("00\n00");
      expect(lights.sumBrightness()).toBe(0);
    });

    test('toggle', () => {
      lights.turnOn(coord(0, 0), coord(0, 0));
      lights.turnOn(coord(1, 1), coord(1, 1));
      lights.toggle(coord(0, 0), coord(1, 1));
      expect(lights.toString()).toBe("32\n23");
      expect(lights.sumBrightness()).toBe(10);
    });
  });

  describe('1000 x 1000', () => {
    let lights;

    beforeEach(() => {
      lights = factoryChristmasLights(1000, 1000);
    });

    function turnOnAll() {
      lights.turnOn(coord(0, 0), coord(999, 999));
    }

    test('turn on (0,0)~(999,999)', () => {
      lights.turnOn(coord(0, 0), coord(999, 999));
      expect(lights.sumBrightness()).toBe(1000000);
    });
    test('turn off (0,0)~(999,999)', () => {
      turnOnAll();
      lights.turnOff(coord(0, 0), coord(999, 999));
      expect(lights.sumBrightness()).toBe(0);
    });
    test('toggle (499,499)~(500,500)', () => {
      lights.toggle(coord(499, 499), coord(500, 500));
      expect(lights.sumBrightness()).toBe(8);
    });
  });

  test("Santa’s instructions", () => {
    const lights = factoryChristmasLights(1000, 1000);

    lights.turnOn(coord(887, 9), coord(959, 629));
    lights.turnOn(coord(454, 398), coord(844, 448));
    lights.turnOff(coord(539, 243), coord(559, 965));
    lights.turnOff(coord(370, 819), coord(676, 868));
    lights.turnOff(coord(145, 40), coord(370, 997));
    lights.turnOff(coord(301, 3), coord(808, 453));
    lights.turnOn(coord(351, 678), coord(951, 908));
    lights.toggle(coord(720, 196), coord(897, 994));
    lights.toggle(coord(831, 394), coord(904, 860));

    expect(lights.sumBrightness()).toBe(539560);
  });
});

function factoryChristmasLights(x, y) {
  return new ChristmasLights(x, y);
}

function coord(x, y) {
  return new Coordinate(x, y);
}
