
//var steve = new Record("Steve", "2300 Jawesome rd", "503 555-5555", 25, false);

function Record (name, address, phoneNumber, age, wombat) {
	this.name = name;
	this.address = address;
	this.phoneNumber = phoneNumber;
	this.age = age;
	this.wombat = wombat;

  // name = this.name;
  // address = this.address;
  // phoneNumber = this.phoneNumber;
  // age = this.age;
  // wombat = this.wombat;

};

Record.prototype.recordMaker = function () {
  console.log(this.name + " is " + this.age + " years old, and lives at " + this.address);
  if (this.wombat) {
     console.log("Calling " + this.name + " at " + this.phoneNumber + " about their wombat.");
  } else {
    console.log(this.name + " doesn't have a wombat");
   }
};

var steve = new Record("Steve", "2300 Jawesome rd", "503 555-5555", 25, true);





// var recordMaker = {
//   wombatSocial: function (steve) {
//   console.log(steve.name + " is " + steve.age + "years old, and lives at " + steve.address);
//     if (steve.wombat) {
//     console.log("Calling " + steve.name + " at " + steve.phoneNumber + " about their wombat");
//     } else {
//     console.log(steve.name + " doesn't have a wombat");
//     }
//   }
// };

// console.log(name + " is" + age + " years old, and lives at " + address);
// if (wombat) {
//   console.log("Calling " + name + " at" + phoneNumber + " about their wombat.");
// } else {
//   console.log(name + " doesn't have a wombat");
// }

// };

// function recordSpeaker(steve){
//  console.log(this.name + " is " + this.age + " years old, and lives at " + this.address);
//  if (this.wombat) {
//    console.log("Calling " + this.name + " at" + this.phoneNumber + " about their wombat.");
//  } else {
//    console.log(this.name + " doesn't have a wombat");
//  }
// };

steve.recordMaker();
//recordMaker.wombatSocial(steve);
//recordSpeaker(steve);

//recordMaker.wombatSocial(steve);
//console.log(recordMaker);
//console.log(Record.address);

