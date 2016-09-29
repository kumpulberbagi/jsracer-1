"use strict"

class Dice {
  constructor() {
    this.init = 0;
  }
  roll() {
    this.init = Math.ceil(Math.random()*6);
    return this;
  }
}

export default Dice
