"use strict"

class Dice {
  constructor() {
    this.length = 6
  }
  roll() {
    return Math.floor(Math.random()*2)+1
  }
}
export default Dice
