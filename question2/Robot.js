const Claw = require('./Claw');
const Hand = require('./Hand');
const Speaker = require('./Speaker');

// Public facing Robot class
class Robot {
  constructor(name) {
    this.leftArm = new Claw();
    this.rightArm = new Hand();
    this.speaker = new Speaker(name);
  }

  greet() {
    this.speaker.sayHello();
  }

  waveLeft() {
    this.leftArm.wave();
  }

  waveRight() {
    this.rightArm.wave();
  }
}

module.exports = Robot;
