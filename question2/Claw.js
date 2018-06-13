const Arm = require('./Arm');

// Claw class, an Arm subclass
class Claw extends Arm {
  constructor() {
    super('snap snap');
  }
}

module.exports = Claw;
