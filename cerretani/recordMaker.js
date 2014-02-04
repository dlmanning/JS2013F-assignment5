function ContactInfo (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address; 
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
}

var captainWombat = new ContactInfo ("Captain Wombat", "a hole in the ground", "night", 12, false);

ContactInfo.prototype.recordMaker = function () {
  console.log(this.name + " is " + this.age + " years old, and lives in " + this.address);
  if (this.wombat) {
    console.log("Calling " + this.name + " at " + this.phoneNumber + " about their wombat");
  } else {
    console.log(this.name + " doesn't have a wombat.");
  }
}

captainWombat.recordMaker();