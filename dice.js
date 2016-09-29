"use strict"

class Dice {
  constructor(sides) {
    this.sides = sides
  }
  roll() {
    this.sides = Math.floor(Math.random()*this.sides)
    return this.sides
  }
}

export default Dice
