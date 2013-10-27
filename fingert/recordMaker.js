
function person (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
}







person.prototype.recordMaker = function () {
  var spiel = " ";
  if (this.wombat) {
    spiel = "Calling " + this.name + " at " + this.phoneNumber + " about their wombat";
  } else {
    spiel = this.name + " doesn't have a wombat";
  }
  console.log(this.name + " is " + this.age + " years old, and lives at " + this.address);
  return spiel;


}

  var jimmyCarter = new person ("Jimmy Carter", "1 Dirt Road, Plains, Georgia", "800-Jim-Knows", 89, true);
  console.log(jimmyCarter.recordMaker());

  
