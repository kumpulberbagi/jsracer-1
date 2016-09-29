"use strict"

class Dice {
  constructor(move) {
    this.move = move
  }
  roll() {
    this.move = (Math.floor(Math.random()* 6 + 1) * 2)
    return this.move
  }
}

export default Dice
