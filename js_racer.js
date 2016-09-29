"use strict"

//import Dice from "./dice.js"
var term = require( 'terminal-kit' ).terminal ;

class JSRacer {
  constructor(players, length, sides) {
    this._players = players;
    this._length = length;
    this._sides = sides;
    this.position = 0;
  }
  print_board(players, length) {
    print_board(this._players, this._length)
    return this;
  }

  print_line() {

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

// Auxilary function
function one_array(player, position, length) {
  var board = [];
  for (var i = 0; i < length; i += 1) {
    board.push("")
  }
  board[position] = player;
  return board.join(" | ");
}

function generatePlayer(number) {
  var players = [];
  for (var i = 0; i < number; i++) {
    players.push(i+1);
  }
  return players;
}

function reset_board() {
  console.log("\x1B[2J")
}

function print_board(playerNum, length) {
  var a = generatePlayer(playerNum);
  var pos = 0, posb = 0;
  console.log(length);
  for (var i = 0; i < length; i++) {
    pos += rollingDice();
    posb += rollingDice();
    if (pos < length || posb < length) {
      var race = one_array(a[0], pos, length)+ "\n" +  one_array(a[1], posb, length);
      console.log(race);
      //reset_board();
    } else {
      if (pos > posb) {
       return a[0] + " wins";
     } else {
       return a[1] + " wins";
     }
    }
  }

}

function rollingDice() {
  return Math.ceil(Math.random()*6);
}
// var a = one_array("a", 2, 30);
// console.log(print_board(2,20));
// console.log("Players " + generatePlayer(3));




var race = new JSRacer(2,20,2);
console.log(race.print_board());
//console.log(race.reset_board());
//export default JSRacer
