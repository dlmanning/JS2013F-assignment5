function record (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;
};

var person01 = new record ("David", "Portland, OR", "(703) 624-8919", 25, true);
var person02 = new record ("Frankie", "Sterling, VA", "(555) 555-5555", 26, true);
var person03 = new record ("Steve", "Arlington, VA", "(555) 555-5555", 27, false);


function recordMaker (record) {
  console.log(record.name + " is " + record.age + " years old, and lives in " 
  	+ record.address);
  if (record.wombat) {
    console.log("Calling " + record.name + " at " + record.phoneNumber 
    	+ " about their wombat");
  } else {
    console.log(record.name + " doesn't have a wombat");
  }
}

recordMaker (person01);
recordMaker (person02);
recordMaker (person03);

// This could also have been accomplished by adding a method in the record function.
// Although that may use up a lot of memory for a sigificantly large data set.