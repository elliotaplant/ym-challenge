const Arm = require('./Arm');

// Hand class, an Arm subclass
class Hand extends Arm {
  constructor() {
    super('swish swish');
  }
}

module.exports = Hand;
