import { Item, Shop } from './GildedRose';

describe("Gilded Rose", function() {
  describe('Sulfuras', () => {
    test('売られたり品質が下がったりすることはない', () => {
      const gildedRose = factoryShop([factorySulfuras({sellIn: 0, quality: 80})]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });
  });
  describe('Aged Brie', () => {
    test('古くなるほど品質が高くなる', () => {
      const gildedRose = factoryShop([factoryAgedBrie({sellIn: 1, quality: 0})]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(1);
    });
    test('期限を過ぎると品質が２倍高くなる', () => {
      const gildedRose = factoryShop([factoryAgedBrie({sellIn: 0, quality: 0})]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(2);
    });
  });
  describe('Backstage passes', () => {
    test('SellInが近づくほど価値が上がり、SellInを過ぎると価値がなくなる', () => {
      const gildedRose = factoryShop([
        factoryBackstagePasses({sellIn: 11, quality: 10}),
        factoryBackstagePasses({sellIn: 10, quality: 10}),
        factoryBackstagePasses({sellIn: 5, quality: 10}),
        factoryBackstagePasses({sellIn: 0, quality: 10}),
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
      expect(items[1].quality).toBe(12);
      expect(items[2].quality).toBe(13);
      expect(items[3].quality).toBe(0);
    });
  });
  describe('その他の商品', () => {
    test('古くなるほど品質が下がる', () => {
      const gildedRose = factoryShop([factoryItem({sellIn: 2, quality: 2})]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    test('販売期限を過ぎると品質は2倍下がる', () => {
      const gildedRose = factoryShop([factoryItem({sellIn: 0, quality: 4})]);
      console.log(factoryItem({sellIn: 0, quality: 4}));
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(2);
    });
    test('品質はマイナスになることはない', () => {
      const gildedRose = factoryShop([factoryItem({quality: 0})]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
  describe('共通', () => {
    test('品質は50を超えない', () => {
      const gildedRose = factoryShop([
        factoryAgedBrie({quality: 50}),
        factoryBackstagePasses({sellIn: 11, quality: 50})
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(50);
    });
  });
});

function factoryShop(items) {
  return new Shop(items);
}

function factoryItem(params) {
  params.name ??= 'foo';
  params.sellIn ??= 1;
  params.quality ??= 10;
  return new Item(params.name, params.sellIn, params.quality);
}

function factoryAgedBrie(params) {
  return factoryItem({name: 'Aged Brie', ...params});
}

function factorySulfuras(params) {
  return factoryItem({name: 'Sulfuras, Hand of Ragnaros', ...params});
}

function factoryBackstagePasses(params) {
  return factoryItem({name: 'Backstage passes to a TAFKAL80ETC concert', ...params});
}
