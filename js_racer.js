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
    return this.print_line(this.players, [1, 2, 3])
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

    for(var z = 0 ; z < arr.length ; z++){
      console.log(arr[z].toString().replace(/,/g,'') + "\n");
    }
 
  }
  //
  // advanced_player(players) {
  //   var pos = [];
  //
  //   for(var x = 0 ; x < player.length ; x++){
  //     pos[x] = 0;
  //   }
  //
  //   for (var i = 0; i <player; i++){
  //     var dadu = new Dice(this.sides);
  //     pos[i] = pos[i] + dadu;
  //   }
  //   return pos;
  // }
  //
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
