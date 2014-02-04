function RoadSign (text, color, shape) {
	this.text = text;
	this.color = color;
	this.shape = shape;
}

RoadSign.prototype.whatSign = function () {
	return "This sign says " + this.text + ". It is a " + this.color + " " + this.shape + ".";
}

var yieldSign = new RoadSign ("YIELD", "Red and White", "Triangle");
var stopSign = new RoadSign ("STOP", "Red and White", "Octagon");
var speedLimitSign = new RoadSign ("SPEED LIMIT", "White and Black", "Rectangle");

console.log(yieldSign.whatSign());
console.log(stopSign.whatSign());
console.log(speedLimitSign.whatSign());
