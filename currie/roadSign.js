function RoadSign (text, color, shape) {
	this.text = text;
	this.color = color;
	this.shape = shape;
}

var yieldSign = new RoadSign ("\"Yield\"", "Yellow", "Triangle");
var stopSign = new RoadSign ("\"STOP\"", "Red", "Pentagon");
var speedLimitSign = new RoadSign ("\"Speed Limit ###\"", "White", "Rectangle");

function describeSign (signObj) {
	console.log("The " + signObj.color + " sign in the shape of a " + signObj.shape 
		+ " has text that reads " + signObj.text + " on it.");
}

describeSign (yieldSign);
describeSign (stopSign);
describeSign (speedLimitSign);