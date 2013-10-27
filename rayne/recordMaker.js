function Registration (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
}


Registration.prototype.recordMaker = function () {
  console.log(this.name + " is " + this.age + "years old, and lives at " + this.address);
  if (this.wombat) {
    console.log("Calling " + this.name + " at " + this.phoneNumber + " about their wombat");
  } else {
    console.log(this.name + " doesn't have a wombat");
  }
}

var mildred = new Registration ("Mildred Orpington", "4653 Chicken Lane", "414-569-1854", 52, true);
console.log(mildred.recordMaker());