function random(){
  var start = ["a","","","","","","","","",""];
  console.log(start)
	var board = ["","","","","","","","","",""];
	var pemain = "a";

	var nilai = 0;
	for (var i=0; i<10; i++){
		nilai += Math.floor((Math.random()*3)+1)
		if (nilai<=10){
			board[nilai] = pemain;
			console.log(board);
			board = ["","","","","","","","","",""];
		}else{
			return pemain+ " menang"
		}

	}

}
console.log(random())
