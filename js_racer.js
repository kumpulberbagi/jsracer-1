"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players
    this.length = length
    this.sides = sides
  }
  print_board() {
  var board = []
    for (var i = 0; i < this.players; i++) {
      board.push([])
      // boar[i][0] = players[i]
      for (var k = 0; k <this.length; k++) {
        board[i].push("| ")
      }
    }
    return board
  }

  print_line() {
    var track = this.print_board();
    var start = [];
    //console.log(track.length);
    for (var i = 0; i < this.players; i++) {
      track[i][0] = "player"+(i+1);
    }
    for (var i = 0; i < this.players; i++) {
        start.push(track[i].join(''));
    }
    // for (var i = 0; i < start.length; i++) {
    //   console.log(start[i]);
    // }
    return start
    //return print_line(player)
  }

  advanced_player() {
    var track = this.print_board();

    var start = [];
    var count = 0
    var random = new Dice
    for (var i = 0; i < this.players; i++) {
      for (var j = 0; j < this.length; j++) {
        count+=random.roll()+j
        console.log(track);
        if (count >= this.length) {
          return track[i][count] +"win"
        }
        track[i][count] = "player"+(i+1);
      }
    //
    //   return test.advanced_player()
    }
    console.log(track)
  //
  //
  //   //return print_line(player)
  }
  //
  // finished() {
  //
  // }
  // winner() {
  //
  // }
  // reset_board() {
  //   console.log("\x1B[2J")
  // }
}

var test = new JSRacer(2,16,6)
// var test2 = new JSRacer(2,16,4)
console.log(test.advanced_player());
// console.log(test2.advanced_player());
export default JSRacer
