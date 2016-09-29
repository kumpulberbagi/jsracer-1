"use strict"

import JSRacer from "./js_racer"
import Dice from "./dice"
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
var js = new JSRacer(["a", "b", "c", "d"], 35, [0, 0, 0, 0])

js.start()
