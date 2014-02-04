var read = require("read");

var secondCounter = 0;


read({prompt: "What's your name?"}, function (err, result) {
  console.log("Your name is: " + result, "it took you" + secondCounter + " seconds to respond.");
})

setInterval(function() {
  secondCounter++;
}, 1000);