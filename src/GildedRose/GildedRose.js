export class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => this._apply(item));
    return this.items;
  }
  _apply(item) {
    if (this._isSulfuras(item)) {
      // do nothing
    } else if (this._isAgedBrie(item)) {
      item.sellIn--;
      item.quality = this._agedBrieNewQuality(item).value;
    } else if (this._isBackstagePasses(item)) {
      const oldSellIn = item.sellIn;
      item.sellIn--;
      item.quality = this._backstagePassesNewQuality(item, oldSellIn).value;
    } else {
      item.sellIn--;
      item.quality = this._otherItemNewQuality(item).value;
    }
  }
  _isSellByDatePassed(item) {
    return item.sellIn < 0;
  }
  _isAgedBrie(item) {
    return item.name === 'Aged Brie';
  }
  _isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }
  _isBackstagePasses(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }
  _agedBrieNewQuality(item) {
    const increases = this._isSellByDatePassed(item) ? 2 : 1;
    return new Quality(item.quality).increase(increases);
  }
  _backstagePassesNewQuality(item, oldSellIn) {
    if (this._isSellByDatePassed(item)) {
      return new Quality(0);
    }
    let increases = 1;
    if (oldSellIn <= 5) {
      increases = 3;
    } else if (oldSellIn <= 10) {
      increases = 2;
    }
    return new Quality(item.quality).increase(increases);
  }
  _otherItemNewQuality(item) {
    const drops = this._isSellByDatePassed(item) ? 2 : 1;
    return new Quality(item.quality).drop(drops);
  }
}

class Quality {
  constructor(value) {
    if (value < this.min) throw new Error('too small');
    this.value = value;
  }
  get min() { return 0; }
  get max() { return 50; }
  increase(num) {
    return new Quality(Math.min(this.max, this.value + num));
  }
  drop(num) {
    return new Quality(Math.max(this.min, this.value - num));
  }
}
