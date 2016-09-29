"use strict"

class JSRacer {
  constructor(PlayerA, PlayerB, PlayerC, PlayerALine, PlayerBLine, PlayerCLine) {
    this.tampungBoard = []
    this.PlayerA = PlayerA
    this.PlayerB = PlayerB
    this.PlayerC = PlayerC
    this.PlayerALine = PlayerALine
    this.PlayerBLine = PlayerBLine
    this.PlayerCLine = PlayerCLine
    this.PlayerCurPosA = 0
    this.PlayerCurPosB = 0
    this.PlayerCurPosC = 0
    this.onPlaying = true
  }
  runner() {
    this.print_board_and_Get_Movement_and_getWinner()
  }
  print_board_and_Get_Movement_and_getWinner() {
    for (var i = 0; i < 3; i++) {
      this.tampungBoard.push([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '])
    }
    // Place player
    this.PlayerA = this.tampungBoard[0][this.PlayerCurPosA] = 'A'
    this.PlayerB = this.tampungBoard[1][this.PlayerCurPosB] = 'B'
    this.PlayerC = this.tampungBoard[2][this.PlayerCurPosC] = 'C'
      // player line
    this.PlayerLineA = this.tampungBoard[0]
    this.PlayerLineB = this.tampungBoard[1]
    this.PlayerLineC = this.tampungBoard[2]
      //Random movement player A
    for (var i = 0; i < this.PlayerLineA.length; i++) {
      if (this.tampungBoard[0][this.PlayerCurPosA] === 'A' ||
        this.tampungBoard[0][this.PlayerCurPosA + randomMovement()] === 'A') {
        this.PlayerA = this.tampungBoard[0][this.PlayerCurPosA] = ''
        this.PlayerCurPosA += randomMovement()
        this.PlayerA = this.tampungBoard[0][this.PlayerCurPosA] = 'A'
        if (i == 4) {
          // if (this.tampungBoard[0][this.PlayerCurPosA] === 'A') {
          //   console.log("Position A1 : " + this.PlayerCurPosA);
          //   console.log("A Winner");
          // }

          if (this.PlayerCurPosA >= 8) {
            this.onPlaying = false
            console.log("Position A : " + this.PlayerCurPosA);
            console.log("A Winner");
          }

          break
        }
        console.log(this.tampungBoard);
      } else {
        this.PlayerCurPosA += randomMovement()
        this.PlayerA = this.tampungBoard[0][this.PlayerCurPosA] = 'A'
        if (i == 4) {
          if (this.PlayerCurPosA >= 8) {
            this.onPlaying = false
            console.log("Position A : " + this.PlayerCurPosA);
            console.log("A Winner");
          }
          // if (this.tampungBoard[0][this.PlayerCurPosA] === 'A') {
          //   console.log("Position A2 : " + this.PlayerCurPosA);
          //   console.log("A Winner");
          // }
          break
        }
        console.log(this.tampungBoard);
      }
      //Random movement player B
      if (this.tampungBoard[1][this.PlayerCurPosB] === 'B' || this.tampungBoard[1][this.PlayerCurPosB + randomMovement()] === 'B') {
        this.PlayerB = this.tampungBoard[1][this.PlayerCurPosB] = ''
        this.PlayerCurPosB += randomMovement()
        this.PlayerB = this.tampungBoard[1][this.PlayerCurPosB] = 'B'
        if (i == 4) {
          // if (this.tampungBoard[0][this.PlayerCurPosB] === 'B') {
          //   console.log("Position B : " + this.PlayerCurPosB);
          //   console.log("B Winner");
          // }
          if (this.PlayerCurPosB >= 8) {
            this.onPlaying = false
            console.log("Position B : " + this.PlayerCurPosB);
            console.log("B Winner");
          }
          break
        }
        console.log(this.tampungBoard);
      } else {
        this.PlayerCurPosB += randomMovement()
        this.PlayerB = this.tampungBoard[1][this.PlayerCurPosB] = 'B'
        if (i == 4) {
          // if (this.tampungBoard[0][this.PlayerCurPosB] === 'B') {
          //   console.log("Position B : " + this.PlayerCurPosB);
          //   console.log("B Winner");
          // }
          if (this.PlayerCurPosB >= 8) {
            this.onPlaying = false
            console.log("Position B : " + this.PlayerCurPosB);
            console.log("B Winner");
          }
          break
        }
        console.log(this.tampungBoard);
      }
      //Random movement player C
      if (this.tampungBoard[2][this.PlayerCurPosC] === 'C' || this.tampungBoard[2][this.PlayerCurPosC + randomMovement()] === 'C') {
        this.PlayerC = this.tampungBoard[2][this.PlayerCurPosC] = ''
        this.PlayerCurPosC += randomMovement()
        this.PlayerC = this.tampungBoard[2][this.PlayerCurPosC] = 'C'
        if (i == 4) {
          // if (this.tampungBoard[0][this.PlayerCurPosC] === 'C') {
          //   console.log("Position C : " + this.PlayerCurPosC);
          //   console.log("C Winner");
          // }
          if (this.PlayerCurPosC >= 8) {
            this.onPlaying = false
            console.log("Position C : " + this.PlayerCurPosC);
            console.log("C Winner");
          }
          //
          // if(this.PlayerCurPosC == 8) {
          //
          // }
          //
          break
        }
        console.log(this.tampungBoard);
      } else {
        this.PlayerCurPosC += randomMovement()
        this.PlayerC = this.tampungBoard[2][this.PlayerCurPosC] = 'C'
        if (i == 4) {
          // if (this.tampungBoard[0][this.PlayerCurPosC] === 'C') {
          //   console.log("Position C : " + this.PlayerCurPosC);
          //   console.log("C Winner");
          // }
          if (this.PlayerCurPosC >= 8) {
            this.onPlaying = false
            console.log("Position C : " + this.PlayerCurPosC);
            console.log("C Winner");
          }
          break
        }
        console.log(this.tampungBoard);
      }
    }

  }

  reset_board() {
    console.log("\x1B[2J")
  }

}
var jsRacer = new JSRacer()
jsRacer.runner()

function randomMovement() {
  return Math.floor(Math.random() * 2) + 1
}
