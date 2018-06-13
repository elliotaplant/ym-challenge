// Speaker class
class Speaker {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello! my name is ${this.name}`);
  }
}

module.exports = Speaker;
