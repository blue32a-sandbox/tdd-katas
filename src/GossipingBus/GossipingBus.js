export class GossipingBus {
  constructor() {
    this.allGossips = new Set();
  }
  operate(plan) {
    this._parsePlan(plan);
    let count = 1;
    for (let min = 0; min <= 480; min++) {
      this._exchangeGossips();
      if (this._isAllDriverKnowAllGossips()) return count;
      this.drivers.forEach(driver => driver.goNextStop());
      count++;
    }
    return undefined;
  }
  _parsePlan(plan) {
    this.drivers = plan.split('\n')
      .map(row => row.split(' '))
      .map((stops, i) => {
        const gossip = i + 1;
        this.allGossips.add(gossip);
        return new Driver(stops, gossip);
      });
  }
  _exchangeGossips() {
    this.drivers.forEach(driverA => {
      this.drivers.forEach(driverB => {
        if (driverA.current === driverB.current) {
          driverA.mergeGossips(driverB.gossips);
          driverB.mergeGossips(driverA.gossips);
        }
      });
    });
  }
  _isAllDriverKnowAllGossips() {
    return this.drivers.every(driver => driver.isKnowGossips(this.allGossips));
  }
}

class Driver {
  constructor(stops, gossip) {
    this.stops = stops;
    this.stopsIndex = 0;
    this.gossips = new Set([gossip]);
  }
  get current() {
    return this.stops[this.stopsIndex];
  }
  goNextStop() {
    this.stopsIndex = this.stops[this.stopsIndex + 1]
      ? this.stopsIndex + 1
      : 0;
  }
  mergeGossips(gossips) {
    this.gossips = new Set([...this.gossips, ...gossips]);
  }
  isKnowGossips(gossips) {
    return Array.from(gossips).every(gossip => this.gossips.has(gossip));
  }
}
