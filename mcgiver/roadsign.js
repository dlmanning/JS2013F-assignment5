// Use the class creation pattern to implement 
//a RoadSign class. It should have text, color 
//and shape properties. Use the constructor to create 
//a Yield Sign, a Stop Sign and a Speed Limit Sign.


var roadSign = {
    text: "",
    color: "",
    shape: ""
};

var yieldSign = Object.create(roadSign);
yieldSign.text =  "Yield";
yieldSign.color = "Yellow";
yieldSign.shape = "Triangle";

var stopSign = Object.create(roadSign);
stopSign.text = "Stop";
stopSign.color = "Red";
stopSign.shape = "Pentagon";

var speedSign = Object.create(roadSign);
speedSign.text = "Speed Limit 45";
speedSign.color = "White";
speedSign.shape = "Square";

console.log(yieldSign);
console.log(stopSign);
console.log(speedSign);