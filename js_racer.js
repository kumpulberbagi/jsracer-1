"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.lengths = length;
    this.sides = sides;
    this.lastPlayer = '';
    this.pos = []

  }

  print_board() {
    return this.print_line(this.players, this.advanced_player(this.players))
  }

  print_line(players, pos) {
    var arr = [];
    for (var i = 0; i <players.length; i++){
      arr[i] = [];
      for (var j = 0; j<this.lengths; j++){
        arr[i][j] = " | ";
      }
    }

    for(var g = 0 ; g < players.length ; g++){
      arr[g].splice(pos[g], 1, players[g]);
    }
    //console.log(arr)
    var display = []
    for(var z = 0 ; z < arr.length ; z++){
      var print = (arr[z].toString().replace(/,/g,''));
      display.push(print)
    }
    return display
  }
  advanced_player(players) {
    if (this.pos.length === 0){
      var pos = [];
    for(var x = 0 ; x < players.length ; x++){
      pos[x] = 0;
    }
  }
    for (var i = 0; i <players.length; i++){
      // var dadu = new Dice(this.sides);
      var dadu = Math.floor(Math.random()*this.sides)
      this.pos[i] = pos[i] + dadu;
    }
    return this.pos;
  }

  // finished() {
  //   if( arr.length-1 != "| |"){
  //     advanced_player(players);
  //   }else{
  //     return this.lastPlayer;
  //   }
  // }
  // winner() {
  //   if(finished() == true){
  //     return "The Winner is " + this.lastPlayer;
  //   }
  // }
  // reset_board() {
  //   console.log("\x1B[2J")
  // }
}

export default JSRacer
var test = new JSRacer(['a', 'b', 'c'],20,6);
// console.log(
console.log(test.print_board())
