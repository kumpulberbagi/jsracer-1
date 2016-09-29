"use strict"

class Dice {
  constructor(sides) {
    this.sides = sides;
    this.random = ""
  }
  roll() {
    this.random = Math.floor(Math.random()*this.sides)
    return this.random
  }
}

export default Dice
