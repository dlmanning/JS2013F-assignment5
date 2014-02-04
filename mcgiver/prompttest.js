var prompt = require("prompt");

  //
  // Setting these properties customizes the prompt.
  //
  prompt.message = "Question!".rainbow;
  prompt.delimiter = "><".green;

  prompt.start();

  prompt.get({
    properties: {
      name: {
        description: "What is your name?".magenta
      }
    }
  }, function (err, result) {
    console.log("You said your name is: ".cyan + result.name.cyan);
  });