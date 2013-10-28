function Record (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
};

var person01 = new Record ("David", "Portland, OR", "(703) 624-8919", 25, true);
var person02 = new Record ("Frankie", "Sterling, VA", "(555) 555-5555", 26, true);
var person03 = new Record ("Steve", "Arlington, VA", "(555) 555-5555", 27, false);


function recordMaker (recordObj) {
  console.log(recordObj.name + " is " + recordObj.age + " years old, and lives in " 
  	+ recordObj.address);
  if (recordObj.wombat) {
    console.log("Calling " + recordObj.name + " at " + recordObj.phoneNumber 
    	+ " about their wombat");
  } else {
    console.log(recordObj.name + " doesn't have a wombat");
  }
}

recordMaker (person01);
recordMaker (person02);
recordMaker (person03);

// This could also have been accomplished by adding a method in the record function.
// Although that may use up a lot of memory for a sigificantly large data set.