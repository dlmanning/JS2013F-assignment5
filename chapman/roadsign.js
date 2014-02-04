Start();


function Sign(color, shape, text, name) {
this.color = color;
this.shape = shape;
this.text = text;
this.name = name;
};

// var yield = new Sign("yellow", "triangle", "YIELD", "yield");

// var stop = new Sign("red", "octogon", "STOP", "stop");

// var speed = new Sign("white", "square", 55, "speed");



function Timer() {
	var start = new Date();
	var elapsed = 0;
	var end = 250;
	var kosher = false;

	do{elapsed = new Date() - start;}
	while(elapsed < end);
	kosher = true;
};


function Start () {
	console.log("Vrooom! You jump into the car and go for a ride...");
	console.log("");
	Driving;
};


function Distance () {
	return 6 + Math.floor(7 * Math.random()) + Math.floor(3 * Math.random());
};


function Animation () {

	var carSprite = [];
	var distance = Distance();

	for(var i = 1; i <= distance; ++i){
		carSprite[i] = "[]";
		var timer = new Timer;
		

		if(timer.kosher = true){      //QUESTION: why is this = instead of === ? It only works as assignment equals, not comparison. shouldnt it be the other way around?
									  //after all, its asking if the kosher propertie is equal to true
			console.clear;
			console.log(carSprite[i]);
		};
	};
};


var Driving = {

	animation: new Animation,

	randomSign: function () {
		var rando = Math.random();
		if(rando <= .33){
			var yield = new Sign("yellow", "triangle", "YIELD", "yield");
			new SignEvent("yield");

		} else if(rando <= .66){
			var stop = new Sign("red", "octogon", "STOP", "stop");
			new SignEvent("stop");


		} else {
			var speed = new Sign("white", "square", 55, "speed");
			new SignEvent("speed");

		};
	},


};


function SignEvent (name) {
	this.name = name;
	if(name = "yield"){
		console.log("You have come across a YIELD sign");
	} else if(name = "stop"){
		console.log("You have come across a STOP sign");
	} else if(name = "speed"){
		console.log("You have come across a SPEED sign");
	};

};


