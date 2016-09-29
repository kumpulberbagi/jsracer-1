"use strict"

import Dice from "./dice.js"
    var line = [], pos=0
class JSRacer {
  constructor(players, length, sides) {
    this.players = players
    this.length = length
    this.sides = sides
    this.a=0;
  }
  print_board() {
    var array = []
      for (var j = 0; j < 60; j++){
        if(j%2 ==0) {

                array.push(" ")
              }
              else {

                array.push("|")
              }

      }
    return array
  }

  set_positions(positions) {
    for (var m = 0; m < 3;m++){
      var board = this.print_board()
      var player = "a"
      board[positions[m]] = player
      console.log(board.join('').replace(/,/g,""))
    }
  }


  play() {
    var dice = new Dice();
    // this.print_board()
    this.set_positions([0,0,0])
    var i = 0;
    var nArray = [0,0,0]
    while(Math.max.apply(null, nArray) < 60) {
      // this.print_board()

      if(i == 0) {
        nArray = []
        for (var n = 0; n < 3; n++){
          nArray.push(0)
        }
        // console.log(nArray)
        // this.set_positions(nArray)
      }
      else {
        for (var n = 0; n < 3; n++){
          // nArray.push(dice.roll())
          nArray[n] += dice.roll()
        }

        console.log(nArray)
        console.log(nArray.join(" ") )
        this.set_positions(nArray)
        // this.set_positions(nArray)
        // this.print_board()
      }
      // console.log()
      // this.set_positions([nArray])
      i++
    }

  }

  // print_line(player, pos) {
  //
  //   var dice = new Dice();
  //   console.log(dice.roll());
  //
  //   line[0][0] = "a"
  //   line[1][0] = "b"
  //   line[2][0] = "c"
  //       for(var k=0;k<line.length;k++) {
  //         console.log(line[k].join().replace(/,/g, ""));
  //       }
  //
  // }
  advanced_player(player) {

  }
  finished() {
    var a = 10;
    this.a = a;
    this.winner()
  }
  winner() {
    console.log(this.a)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
