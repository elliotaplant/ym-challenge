// Arm superclass
class Arm {
  constructor(waveSound) {
    this.waveSound = waveSound;
  }

  wave() {
    console.log(`**${this.waveSound}**`);
  }
}

module.exports = Arm;
