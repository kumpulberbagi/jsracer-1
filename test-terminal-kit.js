function one_array(player, postion, length) {
  var board = [];
  for (var i = 0; i < length; i += 1) {
    board.push("")
  }
  board[postion] = player;
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
      var race = one_array("Clinton", pos, length)+ "\n" +  one_array("Trump", posb, length);
      console.log(race);
      //reset_board();
    } else {
      if (pos > posb) {
       return "Hilari" + " wins";
     } else {
       return "Donal" + " wins";
     }
    }
  }

}

function rollingDice() {
  return Math.ceil(Math.random()*6);
}
var a = one_array("a", 2, 30);
console.log(print_board(2,20));
console.log("Players " + generatePlayer(3));




// var term = require( 'terminal-kit' ).terminal ;
//
// var progressBar , progress = 0 ;
//
//
// function doProgress()
// {
//     // Add random progress
//     progress += Math.random() / 10 ;
//     progressBar.update( progress ) ;
//
//     if ( progress >= 1 )
//     {
//         // Cleanup and exit
//         setTimeout( function() { term( '\n' ) ; process.exit() ; } , 100 ) ;
//     }
//     else
//     {
//         setTimeout( doProgress , 100 + Math.random() * 400 ) ;
//     }
// }
//
//
// progressBar = term.progressBar( {
//     width: 80 ,
//     title: 'JS Racer is loading:' ,
//     eta: true ,
//     percent: true
// } ) ;
//
// doProgress() ;
//
// var history = [ 'John' , 'Jack' , 'Joey' , 'Billy' , 'Bob' ] ;
//
// var autoComplete = [
//     'Barack Obama' , 'George W. Bush' , 'Bill Clinton' , 'George Bush' ,
//     'Ronald W. Reagan' , 'Jimmy Carter' , 'Gerald Ford' , 'Richard Nixon' ,
//     'Lyndon Johnson' , 'John F. Kennedy' , 'Dwight Eisenhower' ,
//     'Harry Truman' , 'Franklin Roosevelt'
// ] ;
//
// term( 'Please enter your name: ' ) ;
//
// term.inputField(
//     { history: history , autoComplete: autoComplete , autoCompleteMenu: true } ,
//     function( error , input ) {
//
//         term.green( "\nYour name is '%s'\n" , input ) ;
//         process.exit() ;
//     }
// ) ;
