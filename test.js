"use strict"

// //use readline to fix this challenge
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.setPrompt('Masukkan Kata / Kalimat : \n');
// rl.prompt();
// rl.on('line', (input) => {
//     if(input == "aku"){
//       console.log("benar");
//       rl.close()
//     }else{
//       console.log("masukkan kata yang benar");
//     }
// });


class Coba{
  constructor(){
    this._apa = 0;
  }

hasil(){
  console.log("hasil");
}

jalan(){
  this.hasil();
  console.log(this._apa);
  var tampung = 0
  var pemain = 5
  var that = this
  var waktu = setInterval(function() {
      if (tampung == pemain) {
          clearInterval(waktu);
      }else {
          console.log(that._apa);
          console.log("test");
          tampung++
      }
  }, 500)
}

}

var dicoba = new Coba()
dicoba.jalan();
