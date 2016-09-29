"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {

  }
  print_board() {
    var arr = ''
        for(var i = 0; i<15;i++){
          arr += " | "
        }
          return arr;
  }
  print_line(player, pos) {

  }
  advanced_player(player) {

  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

var tampil = new JSRacer();
console.log(tampil.print_board());


export default JSRacer
