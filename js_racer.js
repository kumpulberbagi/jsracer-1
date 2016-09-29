"use strict"

import Dice from "./dice.js"
var dadu = new Dice()

class JSRacer {
  constructor(players, length, sides) {
    this._players = players;
    this._length = length;
    this._sides = sides;
    this._win = false
    this._start = false
    this._finished = false
  }

  set players(value){this._players = value}
  get players(){return this._players}
  set length(value){this._length = value}
  get length(){return this._length}
  set sides(value){this._sides = value}
  get sides(){return this._sides}

  print_board(positions) {
    if(!this._win){
      this.reset_board()

      for (var i =0 ;  i< this.players.length; i++){ //<< fungsi untuk tambah pemain
        // if(this.sides[i] >= this.length){ // << kondisi tidak terpenuhi
        //   this._win = true
        //   this._finished = true
        // }
        this.print_line(this.players[i], positions[i]) // masuk kesini (sudah dicek)
        // if(this._start){
        //   this.sides[i]+= dadu.roll()
        // }
        // this.sides : [0, 0, 0, 0]
        // this.sides[i] += 3
      }
    }
    // return this._win
  }



  start(){
    var i = 0;
    var indexPos = [];
    for(var k = 0; k < this._sides.length; k++){
      indexPos.push(this._sides[k])
    }
    console.log("LOLOLO===============================================" + indexPos);
    var x = 0;
    var y = 0;
    var z = 0;
    var a = 0;
    var positions = indexPos;

    console.log("===================================================  " + positions)
    // !true = false
    // !false = true
    while(!this._win) {
      if(Math.max.apply(Math, positions) >= this.length){
          this._win = true;
          console.log(`Player ${this.players[positions.indexOf(Math.max.apply(Math, positions))]} win !`)
      }else{
        if(i == 0) {
          positions = [x,y,z,a]
        } else {
           x += dadu.roll()
           y += dadu.roll()
           z += dadu.roll()
           a += dadu.roll()
          positions = [x,y,z,a]

          console.log(positions)
        }
        this.print_board(positions)

        i +=1
      }
    }
  }

  print_line(player, pos) {
      var line =""
    for(var j=0; j< this.length; j++){
      var position = " "
      if(j == pos){  // << masih jalan
        position = player
        // console.log(position);
      }
      line += " | " + position
    }
    if(this._win && this._finised){
      line += player + "Win !"
    }
    console.log(line);
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




export default JSRacer
