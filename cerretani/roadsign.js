function RoadSign (text, color, shape) {
	this.text = text;
	this.color = color;
	this.shape = shape;
}

var yieldSign = new RoadSign("YIELD", "yellow", "triangle");
var stopSign = new RoadSign("STOP", "red", "hexagon");
var speedLimitSign = new RoadSign("SPEED LIMIT", "white", "square");

RoadSign.prototype.signDescription = function () {
  console.log("The " + this.text + " sign is " + this.color + " and is shaped like a " + this.shape + ".");
}

yieldSign.signDescription();
stopSign.signDescription();
speedLimitSign.signDescription();