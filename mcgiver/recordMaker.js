
function Users (name, address, phoneNumber, age, wombat) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.wombat = wombat;
}

var user1 = new Users ("Stanley", "1 park place", "555-4444", 25, true); 


function recordMaker (userInput) {
    console.log(userInput.name + " is " + userInput.age + " years old, and lives at " + userInput.address);
  if (userInput.wombat) {
    console.log("Calling " + userInput.name + " at " + userInput.phoneNumber + " about their wombat");
  } else {
    console.log(userInput.name + " doesn't have a wombat");
  }
}

var run = new recordMaker(user1);
// var run = new recordMaker(user2);
// var run = new recordMaker(user3);