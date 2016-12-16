memo.find({name : "yoni"},function(err, data){

})

var fun1 = function() {
  console.log("hallo");
}

var fun2 = function(){
  console.log("hallo 2");
}

// fun2(fun1(), fun1(), fun1());
var data = "hallo";

var hallo = function(yoni){
  console.log(yoni);
}

hallo(data)

function belajar(kata1, kata2){
  console.log(kata1);
  console.log(kata2);
}

belajar("hallo", 21);

var fun3 = function(cb){

  console.log("hallo 3");
  var data = [{ name: "yoni", age: 21 },{name: "toni", age: 21}]
  cb(data);

}

fun3(function(data){
  console.log("ini datanya loh", data[1].name);
});
