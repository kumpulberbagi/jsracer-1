"use strict"
class Dice {
  constructor() {

  }
  roll() {
      return Math.floor(Math.random()*2)+1
  }
}
var dice = new Dice()

class JSRacer {
  constructor(players,length,position) {
    this.position = position
    this.players = players
    this.length = length
    this.sides = []
    this.isPlaying = true
  }
  print_board() {
    for(var i=0;i<this.length;i++)
    {
      this.sides[i] = []
      for(var j=0;j<10;j++)
      {
        this.sides[i].push(' ')
      }
    }
    return this.sides
  }

  print_line() {
    for(var i=0;i<this.players.length;i++)
    {
      this.sides[i][this.position] = this.players[i]
    }
    return this.sides
  }

  advanced_player() {
    this.count = 0
    this.countLine = 0
  while(this.isPlaying){
          this.count++
    for(var i=0;i<this.players.length;i++)
      {
        for(var j=0;j<=10;j++)
        {
          this.countLine++
          if(this.sides[i][j] === this.players[i])
          {
             this.sides[i][j]=''
           }
         }
         this.sides[i][dice.roll()+this.count] = this.players[i]
      }
      this.sleep(500)
      this.reset_board()

      console.log('-----------------------------------------------------------------');
      console.log(this.sides)


      if(this.count >= 8){
    this.isPlaying = false
        for(var i=0;i<this.players.length;i++){
          if(this.sides[i].length > 10){
              console.log('Winner '+this.players[i]);
            }

      }

      }
}

}
  reset_board() {
    console.log("\x1B[2J")
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  runner()
  {
    this.advanced_player()
  }
}

var jsracer = new JSRacer(['A','B','C'],3,0)
jsracer.print_board()
jsracer.runner()
