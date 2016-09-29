"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.lengths = length;
    this.sides = sides;
    this.lastPlayer = '';
  }
  print_board() {
    console.log(this.print_line(players, pos));
  }
  print_line(player, pos) {
    var arr = [];
    for (var i = 0; i <player.length; i++){
      arr[i] = [];
      for (var j = 0; j<this.lengths; i++){
        var x = arr[i];
        var y = x[j];
        y.push("|  |");
      }
    }

    for(var j = 0 ; j < player ; i++){
      arr.splice(pos[j], 1, player[j]);
    }
    return arr;
  }

  advanced_player(players) {
    var pos = [];

    for(var x = 0 ; x < player.length ; x++){
      pos[x] = 0;
    }

    for (var i = 0; i <player; i++){
      var dadu = new Dice(this.sides);
      pos[i] = pos[i] + dadu;
    }
    return pos;
  }

  finished() {
    if( arr.length-1 != "| |"){
      advanced_player(players);
    }else{
      return this.lastPlayer;
    }
  }
  winner() {
    if(finished() == true){
      return "The Winner is " + this.lastPlayer;
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
var test = new JSRacer(['a', 'b', 'c'],20,6);
console.log(test.print_line(['a', 'b', 'c'], [5, 3, 2]));
