function RoadSign (text, color, shape) {
  this.text = text;
  this.color = color;
  this.shape = shape;
}

var stopSign = new RoadSign("STOP", "red", "octogon");
var yieldSign = new RoadSign("YIELD", "yellow", "triangle");
var speedSign = new RoadSign("SPEED LIMIT", "white", "rectangle");

RoadSign.prototype.description = function() {
 console.log("A " + this.text + " sign is " + this.color + " and " + this.shape + " shaped.");
}

stopSign.description();
yieldSign.description();
speedSign.description();